import { SafeAreaView, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import React from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';

const HabitAddScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <TextInput label="Name" placeholder="Add Habit" />
        <Button title="Add" onPress={() => Actions.main()} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  }
});

export default HabitAddScreen;
