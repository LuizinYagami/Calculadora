import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';

export default function App() {

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
      setCurrentNumber((firstNumber + lastNumber).toString())
      return
      case '-':
      setCurrentNumber((firstNumber - lastNumber).toString())
      return
      case '*':
      setCurrentNumber((firstNumber * lastNumber).toString())
      return
      case '/':
      setCurrentNumber((firstNumber / lastNumber).toString())
      return
    }
  }

  const buttons = [ 'AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', ',', '+/-', '=', ];

const [currentNumber, setCurrentNumber] = useState(" ");

const [lastNumber, setLastNumber] = useState(" ");


function handleInput(buttonPressed){
  console.log(buttonPressed)
  if(buttonPressed === '+' | buttonPressed === '-'| buttonPressed === '*' | buttonPressed === '/')
{

  setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ')
  return
}
switch(buttonPressed){
  case 'DEL':
  setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
  return
  case 'AC':
  setLastNumber(' ')
  setCurrentNumber(' ')
  return
  case '=':
  setLastNumber(currentNumber + '=')
  calculator()
  return
  case '+/-':
  return
}
setCurrentNumber(currentNumber + buttonPressed)
}

  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
      {buttons.map((button) =>
      <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button,{backgroundColor: '#33302e'}]}>
      <Text style={[styles.textButton,{color:'white',fontSize: 30}]}>{button}</Text>
      </TouchableOpacity>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex=end',
    width: '100%',
    height: 300,
    backgroundColor: '#b8b6b4',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80
    },
    textButton: {
      color: 'black',
      fontSize: 25
    },
    resultText: {
      color: '#282f38',
      margin: 10,
      fontSize: 40
    },
    historyText: {
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end'
    }
});












