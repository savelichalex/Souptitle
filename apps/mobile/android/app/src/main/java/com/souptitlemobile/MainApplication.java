package com.souptitlemobile;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

// vendor
import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  @NotNull
  @Override
  public List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
                                         new BlurViewPackage(),
                                         new LinearGradientPackage(),
                                         new SecretConfigManagerPackage(SecretConfig.class),
                                         new STTimelinePackage(),
                                         );
  }
}
