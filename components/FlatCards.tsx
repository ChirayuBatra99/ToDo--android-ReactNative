import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text style={styles.textColor}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text style={styles.textColor}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text style={styles.textColor}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textColor: {
    color: 'white',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 10,
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
  cardBlue: {
    backgroundColor: 'blue',
  },

})

