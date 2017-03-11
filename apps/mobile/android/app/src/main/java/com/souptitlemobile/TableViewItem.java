package com.souptitlemobile;

import android.content.Context;
import android.view.View;

import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;

public class TableViewItem extends ReactViewGroup {
    final EventDispatcher mEventDispatcher;
    private int mHeight;

    public TableViewItem(Context context) {
        super(context);
        mEventDispatcher = ((ReactContext) getContext()).getNativeModule(UIManagerModule.class).getEventDispatcher();
    }

    @Override
    protected void onMeasure(int widthSpec, int heightSpec) {
        int w = MeasureSpec.getSize(widthSpec);
        int h = mHeight;
        if (mHeight < 1 && getChildCount() > 0) {
            final View child = getChildAt(0);
            LayoutParams lp = child.getLayoutParams();
            if (lp == null) {
                lp = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT); // TODO: what is it LayoutParams???
            }
            int w1 = MeasureSpec.makeMeasureSpec(lp.width, MeasureSpec.AT_MOST);
            int h1 = MeasureSpec.makeMeasureSpec(lp.hight, MeasureSpec.AT_MOST);
            child.measure(w1, h1);
            h = child.getHeight();
        }
        setMeasuredDimension(w, h);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();
        forceLayout();
    }

    public void setHeight(int val) {
        if (mHeight != val) {
            mHeight = val;
            requestLayout();
        }
    }

    public void setInnerRowId(int rowId) {
        mEventDispatcher.dispatchEvent(new UpdateViewEvent(getId(), rowId));
    }

    private class UpdateViewEvent extends Event<UpdateViewEvent>{
        private final int mRowId;

        private UpdateViewEvent(int viewTag, int rowId) {
            super(viewTag);
            mRowId = rowId;
        }

        @Override
        public String getEventName() {
            return "onUpdateView";
        }

        @Override
        public dispatch(RCTEventEmitter eventEmitter) {
            WritableMap eventData = Arguments.createMap();
            eventData.putInt("rowId", mRowId);
            eventEmitter.receiveEvent(getViewTag(), getEventName(), eventData);
        }
    }
}
