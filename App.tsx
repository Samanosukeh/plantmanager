import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';


//Equivale a página Default.vue do Nuxt.js
export default function App() {//utiliza default para o React encontrar esse App
  return (
    <Welcome />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
