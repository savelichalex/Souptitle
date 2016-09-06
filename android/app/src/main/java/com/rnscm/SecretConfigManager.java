package com.rnscm;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
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

    private Map<String,String> configToMap() {
        Field[] declaredFields = config.getDeclaredFields();
        Map<String, String> configMap = new HashMap<String, String>();
        for (Field field : declaredFields) {
            if (java.lang.reflect.Modifier.isStatic(field.getModifiers())) {
                String key = field.getName();
                String val = (String)field.get(null);
                configMap.put(key, val);
            }
        }
        return configMap;
    }

    @ReactMethod
    public void getConfig(String name, Callback callback) {
        callback.invoke(configToMap());
    }

}