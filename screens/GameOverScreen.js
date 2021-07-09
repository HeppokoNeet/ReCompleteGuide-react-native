import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>おめでとう！相手の数字を見破ったよ！</Text>
      <Text>あなたの推理回数: {props.roundsNumber}</Text>
      <Text>正解の数字は: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameOverScreen
