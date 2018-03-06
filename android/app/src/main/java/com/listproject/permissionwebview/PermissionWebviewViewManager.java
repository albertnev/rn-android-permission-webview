package com.listproject.permissionwebview;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class PermissionWebviewViewManager extends SimpleViewManager<PermissionWebviewView> {

    public static final String REACT_CLASS = "PermissionWebviewViewManager";
    private String source;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public PermissionWebviewView createViewInstance(ThemedReactContext context) {
        return new PermissionWebviewView(context); //If your customview has more constructor parameters pass it from here.
    }
    
    @ReactProp(name = "sourceUri")
    public void setSource(PermissionWebviewView view, String source) {
        view.loadUrl(source);
    }
}