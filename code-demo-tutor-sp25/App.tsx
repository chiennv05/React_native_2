import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import BookScreen from './screens/BookScreen'

const App = () => {
  return (
    <Provider store={store}>
      <BookScreen />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})