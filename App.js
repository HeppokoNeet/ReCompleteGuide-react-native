import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ProgressViewIOSComponent, StyleSheet, View } from 'react-native'
import Header from './componants/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.screen}>
      <Header title="High and Low" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
