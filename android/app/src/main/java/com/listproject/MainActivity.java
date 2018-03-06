package com.listproject;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.Manifest;
import android.app.Activity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RnAndroidPermissionWebview";
    }

    // public static Activity mainActivity;
    

    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        // mainActivity = this;
    }
}
