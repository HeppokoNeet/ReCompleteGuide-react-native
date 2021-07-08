import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

import Card from '../componants/Card';
import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>NEW GAME</Text>
      <Card style={styles.inputContainer}>
        <Text>数字を決めろ</Text>
        <TextInput />
        <View style={styles.buttonContaniner}>
          <View style={styles.button}>
            <Button title="リセット" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="確認" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContaniner: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
      width: 100
  }
})

export default StartGameScreen
