import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Vibration } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const PATTERN = [
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
  1000,
]

const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSubject}
        label="What would you like to focus on?"
      />
            <TouchableOpacity onPress = {() => Vibration.vibrate(PATTERN)} style = {styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: 10,
  },
  // text : {
  //   color : "white"
  // }
});
