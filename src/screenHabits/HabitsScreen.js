import { SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native';
import React from 'react';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';

const TodayScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Header />
        <Button title="hello" onPress={() => Actions.main()} />
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

export default TodayScreen;
