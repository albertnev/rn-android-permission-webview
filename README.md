#Android Webview for React Native
This component just implements the function onPermissionRequest() of Android Webviews, so the user is asked to grant permission on camera, mic, etc. on the web. 
Native Webviews for ReactNative do not have this function implemented, and thus, nothing is asked to the user (it just fails and denies the permission silently).

This is an example of how to create an Android Webview that already implements it and asks the user for the permission.
