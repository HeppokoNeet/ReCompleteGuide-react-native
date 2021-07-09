import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'

import Card from '../componants/Card'
import Colors from '../constants/colors'
import NumberContainer from '../componants/NumberContainer'
import Input from '../componants/Input'

const StartGameScreen = (props) => {
  const [enterdValue, setEnterdValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = (inputText) => {
    setEnterdValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnterdValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('無効な数字です', '1から99の数字を選択してください', [
        { text: 'OK', style: 'destructive', onPress: resetInputHandler },
      ])
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnterdValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>選択した数字は</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="ゲームをスタートする"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>NEW GAME</Text>
        <Card style={styles.inputContainer}>
          <Text>数字を決めてください</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCpitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterdValue}
          />
          <View style={styles.buttonContaniner}>
            <View style={styles.button}>
              <Button
                title="リセット"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="確認"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
})

export default StartGameScreen
