package com.souptitlemobile;

import java.util.Map;
import javax.annotation.Nullable;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class TableViewItemManager extends ViewGroupManager<TableViewItem> {
    @Override
    public TableViewItem createViewInstance(ThemedReactContext context) {
        return new TableViewItem(context);
    }

    @Override
    public String getName() {
        return TableViewItem.class.getSimpleName();
    }

    @ReactProp(name = "innerRowId")
    public void setInnerRowId(TableViewItem view, int val) {
        view.setInnerRowId(val);
    }
}
