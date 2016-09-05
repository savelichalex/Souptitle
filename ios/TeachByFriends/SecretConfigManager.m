//
//  SecretConfigManager.m
//  TeachByFriends
//
//  Created by Admin on 05.09.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SecretConfigManager.h"

#import "SecretConfig.h"
#import <objc/runtime.h>

#import <objc/runtime.h>

@interface NSDictionary(dictionaryWithObject)

+(NSDictionary *) dictionaryWithPropertiesOfObject:(id) obj;

@end
@implementation NSDictionary(dictionaryWithObject)

+(NSDictionary *) dictionaryWithPropertiesOfObject:(id)obj
{
  NSMutableDictionary *dict = [NSMutableDictionary dictionary];
  
  unsigned count;
  objc_property_t *properties = class_copyPropertyList([obj class], &count);
  
  for (int i = 0; i < count; i++) {
    NSString *key = [NSString stringWithUTF8String:property_getName(properties[i])];
    [dict setObject:[obj valueForKey:key] forKey:key];
  }
  
  free(properties);
  
  return [NSDictionary dictionaryWithDictionary:dict];
}

@end

@implementation SecretConfigManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getConfig:(NSString *) name
                  callback:(RCTResponseSenderBlock)callback)
{
  SecretConfig *config = [[SecretConfig alloc] init];
  NSDictionary* configDict = [NSDictionary dictionaryWithPropertiesOfObject: config];
  for (id key in configDict) {
    NSLog(@"key: %@, value: %@ \n", key, [configDict objectForKey:key]);
  }
  if(callback) {
    callback(configDict);
  }
}

@end