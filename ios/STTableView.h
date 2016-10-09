//
//  STTableView.h
//  TeachByFriends
//
//  Created by Admin on 09.10.16.
//

#ifndef STTableView_h
#define STTableView_h

#import <UIKit/UIKit.h>
@class RCTBridge;

@interface STTableView : UIView {
  RCTBridge *_bridge;
  RCTEventDispatcher *_eventDispatcher;
  NSMutableArray *_unusedCells;
}

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@property (nonatomic) float rowHeight;
@property (nonatomic) NSInteger numRows;

@end


#endif /* STTableView_h */
