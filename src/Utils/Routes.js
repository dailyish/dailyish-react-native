import React from 'react';
import { Scene, Router, Drawer, Stack, Actions } from 'react-native-router-flux';

import TodayScreen from '../screens/TodayScreen';
import TodayEditScreen from '../screens/TodayEditScreen';
import HabitsScreen from '../screens/HabitsScreen';
import HabitAddScreen from '../screens/HabitAddScreen';
import HabitEditScreen from '../screens/HabitEditScreen';

import MainDrawer from '../navigation/MainDrawer';
import { DARK_GREEN, WHITE } from '../Colors';
import { NavIcon } from '../Components';

const RouterComponent = () => {
  return (
    <Router>
      <Drawer
        navigationBarStyle={{ backgroundColor: DARK_GREEN }}
        hideNavBar
        key="drawer"
        contentComponent={MainDrawer}
        drawerIcon={<NavIcon name="bars" />}
        drawerWidth={250}
        drawerPosition="left"
        titleStyle={{
          color: WHITE,
          fontSize: 17
        }}
        navBarButtonColor={WHITE}
      >
        <Stack key="main">
          <Scene
            initial
            key="Today"
            component={TodayScreen}
            title="Today"
            // renderRightButton={<NavIcon name="pencil-alt" onPress={() => Actions.todayEdit()} />}
            // onRight={() => {}}
          />
          <Scene key="todayEdit" component={TodayEditScreen} title="Edit Today" back />
        </Stack>
        <Scene key="edits" cardStyle={{ backgroundColor: '#FFF' }}>
          <Scene
            key="Habits"
            component={HabitsScreen}
            title="Habits"
            rightTitle="Add"
            onRight={() => {
              Actions.habitAdd();
            }}
          />
          <Scene key="habitAdd" component={HabitAddScreen} title="Add Habit" back />
          <Scene key="habitEdit" component={HabitEditScreen} title="Edit Habit" back />
        </Scene>
      </Drawer>
    </Router>
  );
};

export default RouterComponent;
