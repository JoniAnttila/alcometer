import { Text, TextInput, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Radiobutton from './components/Radiobutton';
import styles from './style/style';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottleAmount, setBottleAmount] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState(1);
  const [result, setResult] = useState(0);
  const options = [
    {
      label: 'Male',
      value: 1
    },
    {
      label: 'Female',
      value: 2
    },
  ]

  const bottles = Array();
  bottles.push({label: '1 bottle', value: 1});
  bottles.push({label: '2 bottles', value: 2});
  bottles.push({label: '3 bottles', value: 3});
  bottles.push({label: '4 bottles', value: 4});
  bottles.push({label: '5 bottles', value: 5});
  bottles.push({label: '6 bottles', value: 6});
  bottles.push({label: '7 bottles', value: 7});
  bottles.push({label: '8 bottles', value: 8});
  bottles.push({label: '9 bottles', value: 9});
  bottles.push({label: '10 bottles', value: 10});
  bottles.push({label: '11 bottles', value: 11});
  bottles.push({label: '12 bottles', value: 12});

  const date = Array();
  date.push({label: '1 hour', value: 1});
  date.push({label: '2 hours', value: 2});
  date.push({label: '3 hours', value: 3});
  date.push({label: '4 hours', value: 4});
  date.push({label: '5 hours', value: 5});
  date.push({label: '6 hours', value: 6});
  date.push({label: '7 hours', value: 7});
  date.push({label: '8 hours', value: 8});
  date.push({label: '9 hours', value: 9});
  date.push({label: '10 hours', value: 10});
  date.push({label: '11 hours', value: 11});
  date.push({label: '12 hours', value: 12});
  
  function calculate() {
    if (!weight.trim()) {
      setResult(0);
      Alert.alert(
        "Alcometer",
        "Input your weight first!",
        [
          { text: "OK" }
        ]
      );
      return;
    }
    if (weight == 0) {
      setResult(0);
      return;
    }
    let litres = bottleAmount * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === 1) {
      let resultMale = gramsLeft / (weight * 0.7);
      if (resultMale < 0) {
        setResult(0);
      } else {
        setResult(resultMale);
      }
    } else {
      let resultFemale = gramsLeft / (weight * 0.6);
      if (resultFemale < 0) {
        setResult(0);
      } else {
        setResult(resultFemale);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.heading1}>Alcometer</Text>
        <Text style={styles.heading2}>Weight</Text>
        <TextInput placeholder='Input your weight here' style={[styles.Input,styles.TextInput]} keyboardType="numeric" onChangeText={text => setWeight(text)}></TextInput>

        <Text style={styles.heading2}>Bottles</Text>
        <Picker style={styles.Input} onValueChange={(itemValue) => setBottleAmount(itemValue)}
        selectedValue={bottleAmount}>
          {bottles.map((bottles,index) => (
            <Picker.Item  key={index} label={bottles.label} value={bottles.value}/>
          ))}
        </Picker>

        <Text style={styles.heading2}>Time</Text>
        <Picker style={styles.Input} onValueChange={(itemValue) => setTime(itemValue)}
        selectedValue={time}>
          {date.map((time,index) => (
            <Picker.Item  key={index} label={time.label} value={time.value}/>
          ))}
        </Picker>
        
        <Text style={styles.heading2}>Gender</Text>
        <Radiobutton options={options} onPress={(value) => {setGender(value)}} defaultValue={1}/>

        <Text style={[styles.result, (result == 0) ? styles.green : ((result < 1.5) ? styles.yellow : styles.red)]}>{result.toFixed(2)}</Text>
        <Pressable style={styles.btn} onPress={() => calculate()}>
          <Text style={styles.btntxt}>Calculate</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

