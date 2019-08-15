import React from 'react';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';

import { DrawerItem } from '../Components';

const MainView = styled.View`
  flex: 1;
  margin-top: 60px;
`;

const drawerList = [
  {
    page: 'Today',
    icon: 'calendar-day'
  },
  {
    page: 'Habits',
    icon: 'calendar-day'
  }
];

const DrawerContent = () => {
  return (
    <MainView>
      {drawerList.map(d => (
        <DrawerItem
          onPress={Actions[d.page]}
          icon={d.icon}
          page={d.page}
          focused={d.page === Actions.currentScene}
          key={d.page}
        />
      ))}
    </MainView>
  );
};

export default DrawerContent;
