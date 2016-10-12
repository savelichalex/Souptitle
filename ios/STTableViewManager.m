//
//  RCTTableViewManager.m
//  TeachByFriends
//
//  Created by Admin on 09.10.16.
//

#import "RCTViewManager.h"
#import "STTableViewManager.h"
#import "STTableView.h"

@implementation STTableViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(scrollPositionOffset, float)
RCT_EXPORT_VIEW_PROPERTY(rowHeight, float)
RCT_EXPORT_VIEW_PROPERTY(numRows, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(backColor, UIColor)

- (UIView *)view {
  return [[STTableView alloc] initWithBridge:self.bridge];
}

@end
