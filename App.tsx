import { View, Text, SafeAreaView, ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import ToDo from './components/ToDo'

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView >
        {/* <View style={styles.main}> */}
        <ToDo />  
        {/* </View>       */}
      </ScrollView>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  main:{
      backgroundColor: 'green',
      flex: 1,
  },
});

export default App