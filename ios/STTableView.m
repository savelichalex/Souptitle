//
//  RNTableView.m
//  TeachByFriends
//
//  Created by Admin on 09.10.16.
//

#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"
#import "UIView+React.h"
#import "STTableView.h"

@interface STTableView()<UITableViewDataSource, UITableViewDelegate>

@property (strong, nonatomic) UITableView *tableView;

@end

@interface TableViewCell : UITableViewCell

@property (weak, nonatomic) UIView *cellView;

@end

@implementation TableViewCell

- (void)setCellView:(UIView *)cellView {
  _cellView = cellView;
  [self.contentView addSubview:cellView];
}

- (void)setFrame:(CGRect)frame {
  [super setFrame:frame];
  [_cellView setFrame:CGRectMake(0, 0, frame.size.width, frame.size.height)];
}

@end

@implementation STTableView

// MARK: - setters
- (void)setRowHeight:(float)rowHeight {
  _tableView.estimatedRowHeight = rowHeight;
  _rowHeight = rowHeight;
}

- (void)setScrollPositionOffset:(float)scrollPositionOffset {
  [_tableView setContentOffset:CGPointMake(0, scrollPositionOffset) animated:NO];
  _scrollPositionOffset = scrollPositionOffset;
}

// MARK: - initialization

- (instancetype)initWithBridge:(RCTBridge *)bridge {
  RCTAssertParam(bridge);
  
  if ((self = [super initWithFrame:CGRectZero])) {
    _eventDispatcher = bridge.eventDispatcher;
    _bridge = bridge;
    
    while([_bridge respondsToSelector:NSSelectorFromString(@"parentBridge")]
          && [_bridge valueForKey:@"parentBridge"]) {
      _bridge = [_bridge valueForKey:@"parentBridge"];
    }
    _unusedCells = [NSMutableArray array];
    
    [self createTableView];
  }
  
  return self;
}

RCT_NOT_IMPLEMENTED(-initWithFrame:(CGRect)frame)
RCT_NOT_IMPLEMENTED(-initWithCoder:(NSCoder *)aDecoder)

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex {
  [_unusedCells addObject:subview];
}

- (void)layoutSubviews {
  [self.tableView setFrame:self.frame];
}

- (void)createTableView {
  _tableView = [[UITableView alloc] initWithFrame:CGRectZero style:UITableViewStylePlain];
  _tableView.dataSource = self;
  _tableView.delegate = self;
//  _tableView.backgroundColor = [UIColor whiteColor]; // TODO: need to decide
  _tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
  [_tableView setShowsVerticalScrollIndicator:NO];
  _tableView.allowsSelection = NO;
  [self addSubview:_tableView];
}

// MARK: - table viwe delegates

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
  return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.numRows;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  return self.rowHeight;
}

- (UITableViewCell* )tableView:(UITableView *)theTableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  static NSString *cellIdentifier = @"CustomCell";
  
  TableViewCell *cell = (TableViewCell *)[theTableView dequeueReusableCellWithIdentifier:cellIdentifier];
  if (cell == nil) {
    cell = [[TableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIdentifier];
    cell.cellView = [self getUnusedCell];
  }
  
  NSDictionary *event = @{
                          @"target": cell.cellView.reactTag,
                          @"childIndex": @(cell.cellView.tag),
                          @"rowId": @(indexPath.row),
                          @"sectionId": @(indexPath.section),
                          };
  [_eventDispatcher sendInputEventWithName:@"onChange" body:event];
  
  return cell;
}

- (void)scrollViewDidScroll:(UIScrollView *)scrollView {
  NSDictionary *event = @{
                          @"target": self.reactTag,
                          @"contentOffset": @{
                              @"y": @((float)_tableView.contentOffset.y),
                              }
                          };
  [_eventDispatcher sendInputEventWithName:@"onScroll" body:event];
}

// MARK: - helpers

- (UIView *)getUnusedCell {
  UIView *res = [_unusedCells lastObject];
  [_unusedCells removeLastObject];
  if (res != nil) {
    res.tag = [_unusedCells count];
  }
  
  return res;
}

@end
