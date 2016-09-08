#!/bin/sh

#  scm.sh
#  secure-config-manager
#  Easily create secret configs for swift projects, that should be on main bundle
#  after compilation, but not shown on git repo
#
#  Created by savelichalex on 31.08.16.
#  Copyright © 2016 savelichalex. All rights reserved.

# Basic vars

rc_file=.scmrc
config_file_name="config"
config_file="$config_file_name.yml"
root_path=$(pwd)

# Functions

parse_yaml2() {
    local prefix=$2
    local s='[[:space:]]*' w='[a-zA-Z0-9_]*' fs=$(echo @|tr @ '\034')
    sed -ne "s|^\($s\)\($w\)$s:$s\"\(.*\)\"$s\$|\1$fs\2$fs\3|p" \
        -e "s|^\($s\)\($w\)$s:$s\(.*\)$s\$|\1$fs\2$fs\3|p"  $1 |
    awk -F$fs '{
        indent = length($1)/2;
        vname[indent] = $2;
        for (i in vname) {if (i > indent) {delete vname[i]}}
        if (length($3) > 0) {
            vn=""; for (i=0; i<indent; i++) {vn=(vn)(vname[i])("_")}
            printf("%s%s%s=\"%s\"\n", "'$prefix'",vn, $2, $3);
        }
    }'
}

init() {
    printf "target: swift\n" > $rc_file
    printf "example: key" > $config_file
    printf "example: key" > "$config_file.sample"
    echo "scm files generated, please update $rc_file and $config_file"
}

help() {
cat <<-EOM
SCM - Easily create secret configs for swift projects

Usage: scm [-i|--init]
           [-g|--generate]
           [-pre|--precompile]
           [-post|--postcompile]
EOM
}

# Get attributes

IS_GENERATE=false
IS_PRECOMPILE=false

for i in "$@"
do
case $i in
    -i|--init)
    init
    exit 0
    shift
    ;;
    -g|--generate)
    IS_GENERATE=true
    shift
    ;;
    -pre|--precompile)
    IS_PRECOMPILE=true
    shift
    ;;
    -post|--postcompile)
    IS_GENERATE=true
    shift
    ;;
    -r=*|--root=*)
    root_path="${i#*=}"
    shift
    ;;
    -h|--help)
    help
    exit 0
    shift
    ;;
esac
done

# Create 'prototype' props

project_folder=""
target="swift"
gen_interface_name="SecretConfig"
# also
# config_file_name

# Parse config for util that might replace 'prototype' props
eval $(parse_yaml2 "$root_path/.scmrc")

config_file="$config_file_name.yml"

# Create path to real app config
config_path="$root_path/$project_folder/$config_file"

swiftGenerator() {
    local config=$1
    local folder=$2
    local interface_empty_str=""
    local interface_full_str=""
    # Parse config and create interface
    prefix="___user_config___"
    eval $(parse_yaml2 $config $prefix)
    from_config_vars=($(compgen -v $prefix))
    for ((i=0; i<${#from_config_vars[@]}; i++))
    do
        var=${from_config_vars[$i]}
        name=${var#$prefix}
        interface_empty_str+="    static let $name: String? = nil\n"
        interface_full_str+="    static let $name: String? = \""${!var}"\"\n"
    done

    # Write result

    SOURCE_FILE="$root_path/$folder/$gen_interface_name.swift"

    if [ "$IS_GENERATE" == true ]; then
      echo "Generate interface in $SOURCE_FILE"
      printf "class $gen_interface_name {\n$interface_empty_str}" > $SOURCE_FILE
    elif [ "$IS_PRECOMPILE" == true ]; then
      echo "Generate actual config in $SOURCE_FILE"
      printf "class $gen_interface_name {\n$interface_full_str}" > $SOURCE_FILE
    fi
}

objcGenerator() {
    local config=$1
    local folder=$2
    local interface_str=""
    local source_empty_str=""
    local source_full_str=""
    # Parse config and create interface
    prefix="___user_config___"
    eval $(parse_yaml2 $config $prefix)
    from_config_vars=($(compgen -v $prefix))
    for ((i=0; i<${#from_config_vars[@]}; i++))
    do
        var=${from_config_vars[$i]}
        name=${var#$prefix}
        interface_str+="    @property (readonly) NSString *$name;\n"
        source_empty_str+="        _$name = nil;\n"
        source_full_str+="        _$name = @\""${!var}"\";\n"
    done

    # Write result

    INTERFACE_FILE="$root_path/$folder/$gen_interface_name.h"
    SOURCE_FILE="$root_path/$folder/$gen_interface_name.m"

    if [ "$IS_GENERATE" == true ]; then
        echo "Generate interface in $INTERFACE_FILE"
        echo "Generate realization in $SOURCE_FILE"
        printf "#import <Foundation/Foundation.h>\n\n@interface $gen_interface_name : NSObject\n\n$interface_str\n@end" > $INTERFACE_FILE
        printf "#import \"$gen_interface_name.h\"\n#import <Foundation/Foundation.h>\n\n@implementation $gen_interface_name\n\n- (id) init {\n  if((self = [super init])) {\n$source_empty_str  }\n  return self;\n}\n\n@end" > $SOURCE_FILE
    elif [ "$IS_PRECOMPILE" == true ]; then
        echo "Generate actual config in $SOURCE_FILE"
        printf "#import \"$gen_interface_name.h\"\n#import <Foundation/Foundation.h>\n\n@implementation $gen_interface_name\n\n- (id) init {\n  if((self = [super init])) {\n$source_full_str  }\n  return self;\n}\n\n@end" > $SOURCE_FILE
    fi
}

javaGenerator() {
    local config=$1
    local folder=$2
    local package=$3
    local source_empty_str=""
    local source_full_str=""
    # Parse config and create interface
    prefix="___user_config___"
    eval $(parse_yaml2 $config $prefix)
    from_config_vars=($(compgen -v $prefix))
    for ((i=0; i<${#from_config_vars[@]}; i++))
    do
        var=${from_config_vars[$i]}
        name=${var#$prefix}
        source_empty_str+="    public static final String $name = null;\n"
        source_full_str+="    public static final String $name = \""${!var}"\";\n"
    done

    # Write result

    SOURCE_FILE="$root_path/$folder/$gen_interface_name.java"

    if [ "$IS_GENERATE" == true ]; then
        echo "Generate interface in $SOURCE_FILE"
        printf "package $package;\n\npublic class $gen_interface_name {\n$source_empty_str}\n" > $SOURCE_FILE
    elif [ "$IS_PRECOMPILE" == true ]; then
        echo "Generate actual config in $SOURCE_FILE"
        printf "package $package;\n\npublic class $gen_interface_name {\n$source_full_str}\n" > $SOURCE_FILE
    fi
}

rnGenerator() {
    objcGenerator $1 $ios_folder
    javaGenerator $1 $android_folder $android_package
}

if [[ "$target" == "swift" ]]; then
    swiftGenerator $config_path $project_folder
elif [[ "$target" == "objective-c" ]]; then
    objcGenerator $config_path $project_folder
elif [[ "$target" == "java" ]]; then
    javaGenerator $config_path $project_folder $package
elif [[ "$target" == "rn" ]]; then
    rnGenerator $config_path
fi
