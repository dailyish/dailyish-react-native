import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red'
  }
});

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <Button title="Today" onPress={Actions.main} />
      <Button title="Habits" onPress={Actions.habits} />
    </View>
  );
};

export default DrawerContent;
