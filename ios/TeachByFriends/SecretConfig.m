#import "SecretConfig.h"
#import <Foundation/Foundation.h>

@implementation SecretConfig

- (id) init {
  if((self = [super init])) {
        _key = nil;
  }
  return self;
}

@end