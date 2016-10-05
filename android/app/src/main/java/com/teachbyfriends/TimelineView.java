package com.example.savelichalex.timeline;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.View;

public class TimelineView extends View {
    private double offsetBetweenLines;
    private int countOfLines;
    private double activeLine;
    private int activeLineInt;
    private double nRatio;
    private double linesRatio;
    private int width;
    private float regularLineWidth = 0.5f;
    private float mainLineWidth = 2f;
    private Paint regularLinePaint = new Paint();
    private Paint mainLinePaint = new Paint();
    private Paint mainPaint = new Paint();

    public double tPosition;
    public int countWordsOnScreen;
    public String[] timestamps;
    public double minAlpha;
    public double minWidthRatio;

    public TimelineView(Context context, AttributeSet attr) {
        super(context, attr);
        tPosition = 0.0;
        countOfLines = 0;
        countWordsOnScreen = 11;
        minAlpha = 0.1;
        minWidthRatio = 0.3;
        setNRatios();
        regularLinePaint.setColor(Color.BLACK);
        regularLinePaint.setStrokeWidth(regularLineWidth);
        mainLinePaint.setColor(Color.BLACK);
        mainLinePaint.setStrokeWidth(mainLineWidth);
    }

    public void settPosition(double value) {
        tPosition = value;
        invalidate();
        requestLayout();
    }

    public void setCountWordsOnScreen(int value) {
        if (value % 2 == 0) {
            countWordsOnScreen = value;
        } else {
            countWordsOnScreen = value + 1;
        }
        setNRatios();
        invalidate();
        requestLayout();
    }

    public void setTimestamps(String[] values) {
        timestamps = values;
        countOfLines = values.length();
        invalidate();
        requestLayout();
    }

    public void setMinAlpha(double value) {
        minAlpha = value;
        invalidate();
        requestLayout();
    }

    public void setMinWidthRatio(double value) {
        minWidthRatio = value;
        invalidate();
        requestLayout();
    }

    public void setNRatios() {
        int n = countWordsOnScreen / 2;
        nRatio = 0.55 + (float)n * 0.05;
        linesRatio = 8.0 - n;
        if (linesRatio < 0.0) {
            linesRatio = 3.0;
        }
    }

    @Override
    public void onSizeChanged(int w, int h, int oldW, int oldH) {
        width = w;
        offsetBetweenLines = (h - ((countOfLines - 1) * regularLineWidth) - mainLineWidth) / countOfLines;
        super.onSizeChanged(w, h, oldW, oldH);
    }

    @Override
    public void onDraw(Canvas canvas) {
        // TODO: set white color as background
        activeLine = tPosition / offsetBetweenLines;
        activeLineInt = (int) activeLine;
        for (int i = 0; i < countOfLines - 1; i++) {
            drawLine(i, canvas);
        }
    }

    private void drawLine(int lineNumber, Canvas canvas) {
        if (isMainLine(lineNumber)) {
            drawMainLine(lineNumber, canvas);
        } else {
            drawRegularLine(lineNumber, canvas);
        }
    }

    private void drawMainLine(int lineNumber, Canvas canvas) {
        float up = (float)(lineNumber * offsetBetweenLines);
        float width = (float)getLineWidth(lineNumber);
        canvas.drawLine(0, up, width, up, mainLinePaint);
        // TODO: set white color behind text
        Rect textRect = new Rect();
        String positionAsString = String.valueOf(tPosition);
        mainLinePaint.getTextBounds(positionAsString, 0, positionAsString.length(), textRect);
        canvas.drawText(positionAsString, width / 2 - textRect.width() / 2, up - textRect.height() / 2, mainLinePaint);
    }

    private void drawRegularLine(int lineNumber, Canvas canvas) {
        float up = (float)(lineNumber * offsetBetweenLines);
        float width = (float)getLineWidth(lineNumber);
        int lineAlpha = (int)getLineAlpha(lineNumber)*100;
        regularLinePaint.setAlpha(lineAlpha);
        canvas.drawLine(0, up, width, up, regularLinePaint);
    }

    private boolean isMainLine(int currentLine) {
        double fraction = getActiveFraction(activeLine);
        int minActiveLine = activeLineInt;
        int maxActiveLine = minActiveLine + 1;
        if (fraction < 0.5 && currentLine == minActiveLine) {
            return true;
        } else if (fraction >= 0.5 && currentLine == maxActiveLine) { // fix > to >= in ios
            return true;
        }
        return false;
    }

    private double getActiveFraction(double activeLine) {
        return activeLine - (int)activeLine;
    }

    private double getLineAlpha(int lineNumber) {
        return minAlpha + (1 - ((double)Math.abs(lineNumber - activeLineInt)/countOfLines))*(1 - minAlpha);
    }

    private double getLineWidth(int lineNumber) {
        double additionalFactor = getAdditionalWidthRatio(lineNumber);
        double betweenBiggestFactor = additionalFactor * getBetweenBiggestWidthRatio(lineNumber);
        return (minWidthRatio +
                additionalFactor * (nRatio - minWidthRatio) +
                betweenBiggestFactor * (1 - nRatio) * width);
    }

    private double getAdditionalWidthRatio(int lineNumber) {
        int linesToActive = getCountOfLinesToActive(lineNumber);
        return (1.0 - Math.tanh(linesToActive * linesRatio / 10));
    }

    private double getBetweenBiggestWidthRatio(int lineNumber) {
        double fraction = getActiveFraction(activeLine);
        if (lineNumber <= activeLineInt || fraction == 0.0) {
            return (1.0 - fraction);
        } else {
            return fraction;
        }
    }

    private int getCountOfLinesToActive(int lineNumber) {
        double fraction = getActiveFraction(activeLine);
        int minActiveLine = activeLineInt;
        int maxActiveLine = minActiveLine + 1;
        if (lineNumber <= activeLineInt || fraction == 0.0) {
            return Math.abs(lineNumber - minActiveLine);
        } else {
            return Math.abs(lineNumber - maxActiveLine);
        }
    }
}
