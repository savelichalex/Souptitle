#import "SecretConfig.h"
#import <Foundation/Foundation.h>

@implementation SecretConfig

- (id) init {
  if((self = [super init])) {
        _DropboxOAuthToken = nil;
  }
  return self;
}

@end