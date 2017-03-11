package com.souptitlemobile;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.DisplayMetricsHolder;

public class TableView extends RecyclerView {
    private List<View> mRecycleViews = null;
    private int mRowHeight;
    private int mHoldItems;
    private EventDispatcher mEventDiscpatcher;

    private final MyAdapter mMyAdapter;

    public TableView(Context context) {
        super(context);
        setLayoutManager(new LinearLayoutManager(getContext()));
        mMyAdapter = new TableViewAdapter();
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

    void addNewView(View view) {
        final NativeListViewItem childView = (NativeListViewItem) view;
        if (mRecycleViews == null) {
            mRecycleViews = new ArrayList<>(mHoldItems);
        }
        if (mRecycleViews.size() < mHoldItems) {
            mRecycleViews.add(childView);
            childView.setHeight(mRowHeight);
        }
        mMyAdapter.notifyDataSetChanged();
    }

    // Looks like destructor
    void removeAllViews() {
        if (mRecycleViews != null) {
            mRecycleViews.clear();
        }
        mEventDiscpatcher = null;
    }

    void setNumRows(int dataSize) {
        mMyAdapter.setNumRows(dataSize);
    }

    void setRowHeight(int rowHeight) {
        mRowHeight = (int) PixelUtil.toPixelFromDIP(rowHeight);
        final int height =
            Math.max(
              DisplayMetricsHolder.getScreenDiscplayMetrics().heightPixels,
              DisplayMetricsHolder.getScreenDiscplayMetrics().widthPixels
            );
        mHoldItems = Math.round(1.6f * height / this.mRowHeight);
        if (mHoldItems < 6) {
            mHoldItems = 6;
        }
    }

    private class TableViewAdapter extends Adapter<ViewHolder> {
        private int mDataSize = 0;
        private int mUPos = 0;

        public void setNumRows(int mDataSize) {
            this.mDataSize = mDataSize;
            notifyDataSetChanged();
        }

        @Override
        public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            final int p = mUPos >= mRecycleViews.size() ? mUPos % mRecycleViews.size() : mUPos;
            View view = mRecycleViews.get(p);
            ++mUPos;
            return new ViewHolder(view);
        }

        @Override
        public void onBindViewHolder(ViewHolder holder, int position) {
            if (holder.itemView instanceof NativeListViewItem) {
                final NativeListViewItem childView = (NativeListViewItem) holder.itemView;
                childView.setInnerRowID(position);
                childView.setHeight(mRowHeight);
            }
        }

        @Override
        public int getItemCount() {
            return mDataSize;
        }
    }
}
