//
//  STText.m
//  TeachByFriends
//
//  Created by Admin on 27.10.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "STText.h"

@implementation STText

- (void)setStText:(NSString *)text {
  if ([text length] > 1) {
    _stText = [text substringToIndex:[text length] - 1];
  } else {
    _stText = text;
  }
  
  [self setNeedsDisplay];
}

- (void)setStFontSize:(int)stFontSize {
  _stFontSize = stFontSize;
  
  [self setNeedsDisplay];
}

-(void)drawRect:(CGRect)rect {
  [[UIColor clearColor] setFill];
  UIRectFill(self.bounds);
  NSMutableParagraphStyle *pStyle = [[NSMutableParagraphStyle alloc] init];
  pStyle.alignment = NSTextAlignmentCenter;
  
  UIFont *mainLineFont = [UIFont preferredFontForTextStyle:UIFontTextStyleBody];
  mainLineFont = [mainLineFont fontWithSize:self.stFontSize];
  [[UIColor whiteColor] setStroke];
  
  NSAttributedString *mainLineString = [[NSAttributedString alloc] initWithString:self.stText attributes:@{ NSFontAttributeName: mainLineFont, NSParagraphStyleAttributeName: pStyle, NSForegroundColorAttributeName: [UIColor whiteColor]}];
  
  [mainLineString drawInRect:self.bounds];
}

- (void)initHelper {
  self.stText = @"";
  self.stFontSize = 12;
}

- (id)initWithFrame:(CGRect)rect {
  if((self = [super initWithFrame:rect])) {
    [self initHelper];
  }
  return self;
}

- (id)init {
  if ((self = [super init])) {
    [self initHelper];
  }
  return self;
}

@end
