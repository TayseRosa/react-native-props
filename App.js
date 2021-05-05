/*
  Developed by: Tayse Rosa
  Date: 05/05/2021
  Link: https://github.com/TayseRosa/react-native-props
*/


import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App(){

  let nome = "Tayse Rosa"
  let idade = 33


  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title} > REACT NATIVE </Text>
        <Text style={styles.subtitle} > PROPS </Text>
      </View>

      <View style={styles.container} >
        <Text style={styles.text} > Nome: {nome} </Text>
        <Text style={styles.text} > Idade: {idade} </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#333',
  },
  title:{
    color: '#fff',
    fontSize:24
  },
  subtitle:{
    color: '#fff',
    fontSize:20
  },
  text:{
    color: '#fff',
    fontSize:24
  }



});