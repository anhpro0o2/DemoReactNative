// Họ và Tên: Lào Doanh Chính
// MSSV: 2124802010112

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(
      'Login Information',
      `Username: ${username}\nPassword: ${password}`,
    );
  };

  return (
    <ImageBackground
      source={require('C:\\Users\\laodo\\OneDrive\\Desktop\\baitap1thayhuu\\DemoReactNative\\assets\\Picture1.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
      
        <Image
          source={require('C:\\Users\\laodo\\OneDrive\\Desktop\\baitap1thayhuu\\DemoReactNative\\assets\\Picture1.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="USERNAME"
            placeholderTextColor="#000"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="PASSWORD"
            placeholderTextColor="#000"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  logo: {
    width: '80%',
    height: 150,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  registerText: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#d98c8c', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;