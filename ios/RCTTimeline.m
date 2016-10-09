//
//  RCTTimeline.m
//  TeachByFriends
//
//  Created by Admin on 02.10.16.
//

#import "RCTViewManager.h"
#import "RCTTimeline.h"

@implementation RCTTimeline

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(tPosition, float)
RCT_EXPORT_VIEW_PROPERTY(countWordsOnScreen, int)
RCT_EXPORT_VIEW_PROPERTY(timestamps, NSArray)
RCT_EXPORT_VIEW_PROPERTY(minAlpha, float)
RCT_EXPORT_VIEW_PROPERTY(minWidthRatio, float)

- (UIView *)view {
  return [[TimelineView alloc] init];
}

@end
