// andriod 737955579318-q1re4v9dlp5tf7u9blh0vu1knmealk2c.apps.googleusercontent.com
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

// screens
import Login from './screens/login.js';

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request,response, promptAsync] = Google.useAuthRequest({
    androidClientId: "737955579318-q1re4v9dlp5tf7u9blh0vu1knmealk2c.apps.googleusercontent.com"
  });

  async function handleSingInWithGoogle() {
    await AsyncStorage.getI
  }
  return (
    <View style={styles.container}>
      <Text>Sign in </Text>
      <Button title ="Google Sign In" onPress={promptAsync}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
