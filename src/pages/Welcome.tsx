import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return (
    // SafeAreaView leva em consideração apenas a área realmente utilizável da tela
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil
      </Text>

      {
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
      }

      <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} >
          <Text style={styles.buttonText}>
              >
          </Text>
      </TouchableOpacity>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//ocupar a tela toda
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around', //space-around para não colar o botão nas extremidades
  },

  title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 38
  },

  subtitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,//px
    marginBottom: 10,
    width: 56,
    height: 56,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24
  },

  image: {
      height: Dimensions.get('window').width * 0.7,//pegando as dimensões do dispositivo
  },
});