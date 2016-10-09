//
//  RNTableView.h
//  TeachByFriends
//
//  Created by Admin on 09.10.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef RNTableView_h
#define RNTableView_h

#import <UIKit/UIKit.h>
#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"
#import "UIView+React.h"

@interface RCTTableView : UIView {
  RCTBridge *_bridge;
  RCTEventDispatcher *_eventDispatcher;
  NSMutableArray *_unusedCells;
}

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@property (nonatomic) float rowHeight;
@property (nonatomic) NSInteger numRows;

@end


#endif /* RNTableView_h */
