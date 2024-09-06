# Project 01 Group 14
Mikaela Lagumbay
Gerardo Solis
Fernando Ponce
Cody Falconer

## Project title: 
Shelved
## Description: 
We are using the Google Books API 
to create a personal library users can interact with 

## Installing on Mac/OS
||||||||||

1.For MacOS, there are a few necessary installs to get the project running. In the terminal, first install homebrew if not already installed. This adds many essential developer tools to your machine that will be necessary. Next, installing Node and Watchman will be needed. 
-----
#brew install node@20
#brew install watchman
-----
2.Following this installation we will need a Java development kit, and for this we will use zulu. Install this via terminal also. 
-----
brew install --cask zulu@17
-----
3.Then, update the Java Home env variable, most likely using this command if you followed the before instructions:

export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

4.After this, Android studio will be necessary for the emulator that will display the running application. 
That download can be found on the android studio website. 
Once complete, also the Android SDK will need to be downloaded. 
To do that, open Android Studio, click on "More Actions" button and select "SDK Manager". 
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. 
Look for and expand the Android 14 (UpsideDownCake) entry, then make sure the following items are checked:

---Android SDK Platform 34---
---Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image---

Then click apply.

5.Finally, we must add the React Native tools environment variables to build apps with native code. In terminal, enter the following commands: 
-----
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
-----
After this, open up your emulator via Android Studio and you should be able to run the app!

||||||||||
## Installing on Windows/Linux
