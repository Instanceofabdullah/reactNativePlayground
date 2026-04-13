import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View>
      
      <View style={styles.head}>
        <Text>Hello</Text>
        <Text>Welcome to my first react native app</Text>
      </View>

      {/* <Button onPress={() => navigation.navigate("Profile")} title="Profile"></Button> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    head: {
        padding: 5
    }
})