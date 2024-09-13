/**
 * android 737955579318-q1re4v9dlp5tf7u9blh0vu1knmealk2c.apps.googleusercontent.com
 * 737955579318-sv5t7ugc7qdarn71csel7gn7ust72osh.apps.googleusercontent.com
 * Used https://medium.com/@mnabilarta/google-oauth-using-react-native-cli-23ce8e1cf716 
 * for the Google oauth sign in 
 **/

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import * as SQLite from 'expo-sqlite';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


const db = SQLite.openDatabase('ReadingAppDB');


const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '737955579318-sv5t7ugc7qdarn71csel7gn7ust72osh.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  

  db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS User(
      id INTEGER PRIMARY KEY NOT NULL,
      userName TEXT NOT NULL,
      email TEXT NOT NULL,
      googleId TEXT NOT NULL UNIQUE,
      );
      `);
  });
},[]);


  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const{id,name,email} = userInfo.signIn()
      console.log(userInfo);

      db.transaction(tx => {
        tx.executeSql(
          `INSERT OR IGNORE INTO User (userName, email, googleId) VALUES (?,?.?)`,
          [name,email,id],
          (tx, results) => {
            console.log('Success', result)
          }
          (tx,error) => {
            console.log('Error',error)
          }
        )
      })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other error happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <View>
      <Text>App</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48, marginTop: 30}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default App;