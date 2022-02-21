import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../style/style';

export default function Radiobutton({options, onPress, defaultValue}) {
    const [value, setValue] = useState(defaultValue);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }
  return (
    <>
      {
      options.map((item) => (
        <View key={item.value} style={styles.buttonContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                {value === item.value && <View style={styles.checkedCircle}/>}
            </Pressable>
        </View>
      ))
      }
    </>
  );
}