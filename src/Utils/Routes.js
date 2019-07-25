import React from 'react';
import { Scene, Router, Drawer, Stack } from 'react-native-router-flux';
import TodayScreen from '../screenToday/TodayScreen';
import HabitsScreen from '../screenHabits/HabitsScreen';
import MainDrawer from '../navigation/MainDrawer';

const RouterComponent = () => {
  return (
    <Router>
      <Drawer
        hideNavBar
        key="drawer"
        contentComponent={MainDrawer}
        drawerWidth={250}
        drawerPosition="left"
      >
        <Stack key="main">
          <Scene
            key="today"
            component={TodayScreen}
            title="Today"
            rightTitle="Edit"
            onRight={() => {}}
          />
        </Stack>
        <Scene key="edits" initial>
          <Scene key="habits" component={HabitsScreen} title="Habits" />
        </Scene>
      </Drawer>
    </Router>
  );
};

export default RouterComponent;
