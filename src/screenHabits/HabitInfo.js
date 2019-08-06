import React from 'react';
import { Text } from 'react-native';

const HabitInfo = props => {
  const { habit } = props;
  const { name } = habit;
  return <Text key={name}>{name}</Text>;
};

export default HabitInfo;
