Dev Tools
=========

This section will help developers understand and find the tools they will need to build and work on this project.

Requirements
------------

* `Sencha Cmd <http://www.sencha.com/products/sencha-cmd/>`_
* `Sencha Touch API <http://www.sencha.com/products/touch>`_ (already included)
* `Node.js <https://nodejs.org/>`_
    * `npm <https://github.com/joyent/node/wiki/installing-node.js-via-package-manager>`_
        * `Phonegap <http://phonegap.com/>`_
        * `Cordova <http://cordova.apache.org/>`_
        * `LintRoller <https://github.com/arthurakay/LintRoller>`_ (optional)
* `Android development environment <http://developer.android.com/sdk/index.html>`_ and/or `iOS development environment <https://developer.apple.com/xcode/>`_

Quick install notes:
	To install cordova/phonegap, you can use the commands:
		| npm install -g phonegap
		| npm install -g cordova
	To install the necessary sdks for your specific project, either open Eclipse/Android Studio (You don't need to use Eclipse/Android Studio, they may come bundled with the SDK download. This just gives you multiple options for how you can navigate to the Android sdk manager.) and click Android sdk manager or type "android" into the cmd to launch the Android sdk manager.

Development Environment Setup
+++++++++++++++++++++++++++++
To support the above requirements, you will likely need to install and configure the following items on your development machine:

For Ubuntu:
	* OpenJDK
	* Apache Ant
	* Ruby v1.9.3
	* git

	`Ubuntu 14.04 64-bit setup Gist <https://gist.github.com/jhcarr/c0276b2978b8603c74e3>`_

For Windows 7/8/8.1:
	* A current version of Java
	* Apache Ant
	* Ruby v1.9.3
	* git

	You will then need to make sure your path to these tools is correctly setup.

	This explains the phonegap path in a little more detail: http://docs.phonegap.com/en/3.4.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide

	Your path should look similar to this, you may have more items in the path for other uses, these are just some of the tools in the path that you will need for Sencha touch.

	| C:\Ruby193\bin;
	| C:\Users\michael.freeman\bin\Sencha\Cmd\5.0.0.160;
	| C:\Program Files\nodejs\;
	| C:\Program Files (x86)\Git\cmd;
	| C:\Users\michael.freeman\AppData\Roaming\npm;
	| C:\senchatools\apache-ant-1.9.0\bin;
	| C:\Python34;
	| C:\senchatools\adt-bundle-windows-x86_64-20140702\sdk\tools;
	| C:\senchatools\adt-bundle-windows-x86_64-20140702\sdk\platform-tools;
	| C:\Program Files\Java\jdk1.7.0_60;
	| C:\Program Files\Java\jre7;
	| C:\Users\michael.freeman\.cordova\lib\android\cordova\3.5.1\bin;

.. note:: We only touched on installing tools for a few operating systems. If you are using iOS or another Linux distribution it will be helpful to browse the docs of these different types of software in order to install them.

Lint
++++

If your editor does not have a built-in JavaScript linter:

Install LintRoller locally
	| cd ./syntax
	| npm install

	| Run the criticize-me.sh script
	| ./criticize-me.sh

	| Open error-log.txt file for results
	| open error-log.txt

Build
=====

1. Ensure that your environment meets the requirements above.
2. Navigate to your development space and run **"git clone"** on this repo.
3. Navigate into the new project directory
    * run **"sencha app build"** to compile web version of the project. Results will appear in */build/production*.
    * run **"sencha app build ios"** to compile the iOS version of the project. Results will appear in */phonegap/platforms/ios*.
    * run **"sencha app build android"** to compile the Android version of the project. Results will appear in *phonegap/platforms/android/*.
4. To debug or view app in browser
    1. Run **"sencha web start"** to launch a jetty server and view web build results.
    2. Open your favorite browser and navigate to localhost at the port indicated by the output of sencha web start.
    	* **If you are unit testing:** navigate the browser into *./tests/jasmine-standalone/*
    .. note:: F12 will bring up your browser's dev tools for debugging.

Install app on Android device
-----------------------------

	1. Plug device into computer.
	2. Navigate to developer options and make sure USB Debugging is enabled. (`This <http://www.androidcentral.com/how-enable-developer-settings-android-42>`_ explains how to find developer options on an android device.)
	3. Make sure you device is hooked up as a camera (You can do this by swiping down from the top of the screen and choosing the camera option)
	4. Then make sure your computer can recognize the device by running **"adb devices"**. If the device is not recognized, then the app can't be loaded to it.
	5. Run **"sencha app build --run android"**, or if you have already built for android, you can navigate into the phonegap folder and run **"phonegap run android -d"**

	.. note:: When testing an app on the android device, you can open up developer usb debug options by opening a chrome browser window on your computer and navigating to **"chrome://inspect/#devices"**.
	.. note:: Error feedback is usually a little better in the web view of the app, due to the fact that it will give you the correct file and line number of the error occurrence.

.. note:: Here are some short gifs showing how to run a `web <http://cl.ly/image/3U2O2O0x0k0m>`_ build and run and install an `Android <http://cl.ly/image/0a3t0Z2h421P?_ga=1.157821682.994093828.1426536282>`_ build.

.. note:: If you want to run the app on an android emulator, you will first have to go to the Android sdk manager and navigate to Tools/Manage AVD's and then create a new AVD to emulate. Then when you run **"sencha app build --run android"** and you don't have a device attached, the emulator will launch and the app will be installed in the emulator. (While an emulator is a nice tool to have, we found that they were slow and hard to work with. For us it was a lot simpler to just install and test the app on an actual device rather than an emulator.)

Debugging Android Install
+++++++++++++++++++++++++
	* If you are having trouble getting your computer to recognize your device, then try:
		* Unplugging and plugging in the device.
		* Turning usb debugging off and back on again.
		* Check your usb cable connection.
		* Make sure your device is connected as a camera.

	* Issues loading the app to device
		* Does your computer recognize the device?
		* If the app has been loaded onto the device and you get the error that there are conflicting security types, then delete the app and try installing it again. This can occur when an app has be loaded on a device from another computer.
		* If you are using **"sencha app build --run android"** try moving into the phonegap folder and run **"phonegap run android -d"**. It will give you more feedback as to why the app can't load to the device.

Install app on iOS device
-------------------------

..note:: Instructions for "Installing app on Ios device" are still under construction. Most of what exists here at the moment is just similar placeholder text copied fromt the "Install app on Android device" section.

	1. Plug device into computer.
	2. Navigate to developer options and make sure USB Debugging is enabled.
	3. Make sure you device is hooked up as a camera 
	4. Then make sure your computer can recognize the device by running 
	5. Run **"sencha app build --run ios"**, or if you have already built for iOS, you can navigate into the phonegap folder and run **"phonegap run ios -d"**

	.. note:: When testing an app on the iOS device, you can open up developer usb debug options by opening a 
	.. note:: Error feedback is usually a little better in the web view of the app, due to the fact that it will give you the correct file and line number of the error occurrence.

.. note:: Here are some short gifs showing how to run a `web <http://cl.ly/image/3U2O2O0x0k0m>`_ build and run and install an `iOS <>`_ build.

.. note:: If you want to run the app on an iOS emulator, you will first have to go to the . Then when you run **"sencha app build --run ios"** and you don't have a device attached, the emulator will launch and the app will be installed in the emulator. (While an emulator is a nice tool to have, we found that they were slow and hard to work with. For us it was a lot simpler to just install and test the app on an actual device rather than an emulator.)

Debugging iOS Install
+++++++++++++++++++++++++
	* If you are having trouble getting your computer to recognize your device, then try:
		* Unplugging and plugging in the device.
		* Turning usb debugging off and back on again.
		* Check your usb cable connection.

	* Issues loading the app to device
		* Does your computer recognize the device?
		* If the app has been loaded onto the device and you get the error that there are conflicting security types, then delete the app and try installing it again. This can occur when an app has be loaded on a device from another computer.
		* If you are using **"sencha app build --run ios"** try moving into the phonegap folder and run **"phonegap run ios -d"**. It will give you more feedback as to why the app can't load to the device.


