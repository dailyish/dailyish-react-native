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
    action: 'main',
    pageName: 'Today',
    icon: 'calendar-day'
  },
  {
    action: 'edits',
    pageName: 'Habits',
    icon: 'calendar-day'
  }
];

const DrawerContent = () => {
  return (
    <MainView>
      {drawerList.map(d => (
        <DrawerItem
          onPress={Actions[d.action]}
          icon={d.icon}
          pageName={d.pageName}
          focused={d.pageName === Actions.currentScene}
          key={d.pageName}
        />
      ))}
    </MainView>
  );
};

export default DrawerContent;
