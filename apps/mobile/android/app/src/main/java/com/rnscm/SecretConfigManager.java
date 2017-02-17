package com.rnscm;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.lang.reflect.Field;

public class SecretConfigManager extends ReactContextBaseJavaModule {

    public Class config;

    public SecretConfigManager(ReactApplicationContext reactContext, Class _config) {
        super(reactContext);
        config = _config;
    }

    @Override
    public String getName() {
        return "SecretConfigManager";
    }

    private WritableMap configToMap() throws IllegalAccessException {
        Field[] declaredFields = config.getDeclaredFields();
        WritableMap configMap = new WritableNativeMap();
        for (Field field : declaredFields) {
            if (java.lang.reflect.Modifier.isStatic(field.getModifiers())) {
                String key = field.getName();
                String val = (String)field.get(null);
                configMap.putString(key, val);
            }
        }
        return configMap;
    }

    @ReactMethod
    public void getConfig(String name, Callback callback) {
        try {
            callback.invoke(configToMap());
        } catch (IllegalAccessException err) {
            callback.invoke(err);
        }
    }

}