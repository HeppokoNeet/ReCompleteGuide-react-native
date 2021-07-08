import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>新しいゲームを始める</Text>
            <View style={styles.inputContainer}>
                <Text>数字を選択しろ</Text>
                <TextInput  />
                <View　style={styles.buttonContaniner}>
                    <Button title="リセット" onPress={() => {}} />
                    <Button title="確認" onPress={() => {}} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContaniner: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;