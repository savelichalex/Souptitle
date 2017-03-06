package com.souptitlemobile;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.uimanager.events.EventDispatcher;

public class TableView extends RecyclerView {
    private List<View> mRecycleViews = null;
    private int mRowHeight;
    private int mHoldItems;
    private EventDispatcher mEventDiscpatcher;

    private final MyAdapter mMyAdapter;

    public TableView(Context context) {
        super(context);
        setLayoutManager(new LinearLayoutManager(getContext()));
        mMyAdapter = new MyAdapter(); // TODO: what is it Adapter???
        setAdapter(mMyAdapter);
    }

    protected void onMeasure(int widthSpec, int heightSpec) {
        final int w =
            MeasureSpec.getSize(
              MeasureSpec.makeMeasureSpec(widthSpec, MeasureSpec.AT_MOST)
            );
        final int h =
            MeasureSpec.getSize(
              MeasureSpec.makeMeasureSpec(heightSpec, MeasureSpec.AT_MOST)
            );
        setMeasuredDimension(w, h);
    }
}
