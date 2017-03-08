package com.souptitlemobile;

import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class TableViewManager extends ViewGroupManager<TableView> {
    @Override
    public String getName() {
        return TableView.class.getSimpleName();
    }

    @Override
    public TableView createViewInstance(ThemedReactContext reactContext) {
        TableView view = new TableView(reactContext);
        view.setLayoutParams(
          new ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
          )
        );
        return view;
    }

    @Override
    public void addView(TableView view, View child, int index) {
        view.addNewView(child);
    }

    @ReactProp(name = "numRows")
    public void setNumRows(TableView view, int size) {
        view.setNumRows(size);
    }

    @ReactProp(name = "rowHeight")
    public void setRowHeight(TableView view, int height) {
        view.setRowHeight(height);
    }

    @Override
    public int getChildCount(TableView view) {
        return view.getChildCount();
    }

    @Override
    public void removeAllViews(TableView view) {
        view.removeAllViews();
    }
}
