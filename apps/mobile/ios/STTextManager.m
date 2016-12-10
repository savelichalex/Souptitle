//
//  STTextManager.m
//  TeachByFriends
//
//  Created by Admin on 27.10.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTViewManager.h"
#import "STTextManager.h"

@implementation STTextManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(stText, NSString)
RCT_EXPORT_VIEW_PROPERTY(stFontSize, int)

- (UIView *)view {
  return [[STText alloc] init];
}

@end
