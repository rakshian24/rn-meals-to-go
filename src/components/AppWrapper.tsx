import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppWrapper = () => {
  return (
    <View style={styles.AppWrapper}>
      <Text>Meals To Go</Text>
    </View>
  )
}

export default AppWrapper

const styles = StyleSheet.create({
  AppWrapper: {
    height: '100%'
  }
})