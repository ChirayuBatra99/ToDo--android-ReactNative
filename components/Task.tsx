import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task: React.FC<{text: string}>=(props)=> {
  return (
    <View style={styles.container}>
      <View style={ styles.square}></View>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        marginBottom: 10,
        width: '160%',
        height: 50,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
    },
    textStyle:{
        color: 'white',    
        fontSize: 30,    
    },
    square:{
        backgroundColor: 'blue',
        height: 30,
        width: 30,
        borderRadius: 5,
        margin: 10,

    }
})

export default Task;