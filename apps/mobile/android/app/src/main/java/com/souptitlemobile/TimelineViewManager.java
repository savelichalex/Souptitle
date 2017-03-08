package com.souptitlemobile;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReadableArray;

public class TimelineViewManager extends SimpleViewManager<TimelineView> {

    public static final String REACT_CLASS = "Timeline";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public TimelineView createViewInstance(ThemedReactContext context) {
        return new TimelineView(context);
    }

    @ReactProp(name = "tPosition")
    public void setTPosition(TimelineView view, double value) {
        view.setTPosition(value);
    }

    @ReactProp(name = "countWordsOnScreen")
    public void setCountWordsOnScreen(TimelineView view, int value) {
        view.setCountWordsOnScreen(value);
    }

    @ReactProp(name = "timestamps")
    public void setTimestamps(TimelineView view, ReadableArray values) {
        String[] convertedValues = new String[values.size()];
        for (int i = 0; i < values.size(); i++) {
            convertedValues[i] = values.getString(i);
        }
        view.setTimestamps(convertedValues);
    }

    @ReactProp(name = "minAlpha")
    public void setMinAlpha(TimelineView view, double value) {
        view.setMinAlpha(value);
    }
    @ReactProp(name = "minWidthRatio")
    public void setMinWidthRatio(TimelineView view, double value){
        view.setMinWidthRatio(value);
    }
}
