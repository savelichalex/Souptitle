//
//  TimelineView.m
//  Timeline
//
//  Created by Admin on 01.10.16.
//  Copyright © 2016 savelichalex. All rights reserved.
//

#import <math.h>
#import "TimelineView.h"

@implementation TimelineView

- (void)setTPosition:(float)value {
    _tPosition = value;
    
    [self setNeedsDisplay];
}

- (void)setCountWordsOnScreen:(int)countWordsOnScreen {
    if (countWordsOnScreen % 2 == 0) {
        _countWordsOnScreen = countWordsOnScreen + 1;
    } else {
        _countWordsOnScreen = countWordsOnScreen;
    }
    [self setNeedsDisplay];
}

- (void)setTimestamps:(NSArray *)timestamps {
    _timestamps = timestamps;
    self->countOfLines = (int)[timestamps count];
    
    [self setNeedsDisplay];
}

- (void)setMinAlpha:(float)minAlpha {
    _minAlpha = minAlpha;
    
    [self setNeedsDisplay];
}

- (void)setMinWidthRatio:(float)minWidthRatio {
    _minWidthRatio = minWidthRatio;
    
    [self setNeedsDisplay];
}

- (void)drawRect:(CGRect)rect {
    [[UIColor whiteColor] setFill];
    UIRectFill(self.bounds);
    CGFloat height = self.bounds.size.height;
    self->offsetBetweenLines = height / self->countOfLines;
    self->activeLine = (CGFloat) self.tPosition / self->offsetBetweenLines;
    self->activeLineInt = (int)self->activeLine;
    self->n = self.countWordsOnScreen / 2;
    self->nRatio = 0.55 + (float)n * 0.05;
    for (int i = 0; i < self->countOfLines; i++) {
        [self drawLine:i];
    }
}

- (void)drawLine:(int)lineNumber {
    if ([self isMainLine:lineNumber] == YES) {
        [self drawMainLine:lineNumber];
    } else {
        [self drawOtherLine:lineNumber];
    }
}

- (BOOL)isMainLine:(int)currentLine {
    float fraction = [self getActiveFraction:self->activeLine];
    int minActiveLine = self->activeLineInt;
    int maxActiveLine = minActiveLine + 1;
    if(fraction < 0.5 && currentLine == minActiveLine) {
        return YES;
    } else if (fraction > 0.5 && currentLine == maxActiveLine){
        return YES;
    }
    return NO;
}

- (void)drawMainLine:(int)lineNumber {
    CGFloat up = lineNumber * self->offsetBetweenLines;
    UIBezierPath *line = [[UIBezierPath alloc] init];
    CGFloat width = [self getLineWidth:lineNumber];
    CGPoint startPoint = CGPointMake(0, up);
    CGPoint endPoint = CGPointMake(width, up);
    [line moveToPoint:startPoint];
    [line addLineToPoint:endPoint];
    line.lineWidth = 2;
    [[UIColor blackColor] setStroke];
    [line stroke];
    
    NSMutableParagraphStyle *pStyle = [[NSMutableParagraphStyle alloc] init];
    pStyle.alignment = NSTextAlignmentCenter;
    
    UIFont *mainLineFont = [UIFont preferredFontForTextStyle:UIFontTextStyleBody];
    mainLineFont = [mainLineFont fontWithSize:self->offsetBetweenLines];
    
    NSAttributedString *mainLineString = [[NSAttributedString alloc] initWithString:[NSString stringWithFormat:@"%f", self.tPosition] attributes:@{ NSFontAttributeName: mainLineFont, NSParagraphStyleAttributeName: pStyle}];
    
    CGRect mainLineBounds;
    mainLineBounds.size = CGSizeMake(mainLineString.size.width*1.1, mainLineString.size.height);
    mainLineBounds.origin = CGPointMake(width / 2 - mainLineBounds.size.width / 2, up - mainLineBounds.size.height / 2);
    [[UIColor whiteColor] setFill];
    UIRectFill(mainLineBounds);
    [[UIColor blackColor] setStroke];
    [mainLineString drawInRect:mainLineBounds];
}

- (void)drawOtherLine:(int)lineNumber {
    CGFloat up = lineNumber * self->offsetBetweenLines;
    UIBezierPath *line = [[UIBezierPath alloc] init];
    CGFloat width = [self getLineWidth:lineNumber];
    CGPoint startPoint = CGPointMake(0, up);
    CGPoint endPoint = CGPointMake(width, up);
    [line moveToPoint:startPoint];
    [line addLineToPoint:endPoint];
    line.lineWidth = 0.5;
    [[UIColor colorWithRed:0.0 green:0.0 blue:0.0 alpha:[self getLineAlpha:lineNumber]] setStroke];
    [line stroke];
}

- (float)getLineAlpha:(int)currentLine {
    return self.minAlpha + (1 - ((float)abs(currentLine - self->activeLineInt)/(float)self->countOfLines) * (1 - self.minAlpha));
}

- (CGFloat)getLineWidth:(int)currentLine {
    float additionalFactor = [self getAdditionalWidthRatio:currentLine];
    float betweenBiggestFactor = additionalFactor * [self getBetweenBiggestWidthRatio:currentLine];
    return (self.minWidthRatio +
            additionalFactor * (self->nRatio - self.minWidthRatio) +
            betweenBiggestFactor * (1 - self->nRatio)) * self.bounds.size.width;
}

- (float)getAdditionalWidthRatio:(int)currentLine {
    int linesToActive = [self getCountOfLinesToActive:currentLine];
    float linesRatio = 8.0 - self->n;
    if (linesRatio < 0.0) {
        linesRatio = 3.0;
    }
    return (1.0 - tanhf(linesToActive * linesRatio / 10));
}

- (float)getBetweenBiggestWidthRatio:(int)currentLine {
    float fraction = [self getActiveFraction:self->activeLine];
    if (currentLine <= self->activeLineInt || fraction == 0.0) {
        return (1.0 - fraction);
    } else {
        return fraction;
    }
}

- (int)getCountOfLinesToActive:(int)currentLine {
    float fraction = [self getActiveFraction:self->activeLine];
    int minActiveLine = self->activeLineInt;
    int maxActiveLine = minActiveLine + 1;
    if (currentLine <= self->activeLineInt || fraction == 0.0) {
        return abs(currentLine - minActiveLine);
    } else {
        return abs(currentLine - maxActiveLine);
    }
}

- (float)getActiveFraction:(CGFloat)aLine {
    return aLine - (int)aLine;
}

- (void)initHelper {
    self.tPosition = 0.0;
    self->countOfLines = 0;
    self.countWordsOnScreen = 11;
    self.minAlpha = 0.1;
    self.minWidthRatio = 0.3;
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
