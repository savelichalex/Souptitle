//
//  SecureConfig.m
//  TeachByFriends
//
//  Created by Admin on 05.09.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "SecretConfig.h"
#import <Foundation/Foundation.h>

@implementation SecretConfig

- (id) init {
  if((self = [super init])) {
    _key = @"123";
  }
  return self;
}

@end