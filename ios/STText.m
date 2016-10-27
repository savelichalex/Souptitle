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
  _stText = text;
  
  [self setNeedsDisplay];
}

- (void)setStFontSize:(int)stFontSize {
  _stFontSize = stFontSize;
  
  [self setNeedsDisplay];
}

-(void)drawRect:(CGRect)rect {
  NSMutableParagraphStyle *pStyle = [[NSMutableParagraphStyle alloc] init];
  pStyle.alignment = NSTextAlignmentCenter;
  
  UIFont *mainLineFont = [UIFont preferredFontForTextStyle:UIFontTextStyleBody];
  mainLineFont = [mainLineFont fontWithSize:self.stFontSize];
  [[UIColor whiteColor] setStroke];
  
  NSAttributedString *mainLineString = [[NSAttributedString alloc] initWithString:self.stText attributes:@{ NSFontAttributeName: mainLineFont, NSParagraphStyleAttributeName: pStyle, NSForegroundColorAttributeName: [UIColor whiteColor]}];
  
  [mainLineString drawInRect:self.bounds];
}

@end
