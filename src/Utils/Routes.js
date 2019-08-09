import React from 'react';
import { Scene, Router, Drawer, Stack, Actions } from 'react-native-router-flux';
import TodayScreen from '../screenToday/TodayScreen';
import TodayEditScreen from '../screenTodayEdit/TodayEditScreen';
import HabitsScreen from '../screenHabits/HabitsScreen';
import HabitAddScreen from '../screenHabitAdd/HabitAddScreen';
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
            key="today"
            component={TodayScreen}
            title="Today"
            renderRightButton={<NavIcon name="pencil-alt" onPress={() => Actions.todayEdit()} />}
            onRight={() => {}}
          />
          <Scene key="todayEdit" component={TodayEditScreen} title="Edit Today" back />
        </Stack>
        <Scene key="edits" initial cardStyle={{ backgroundColor: '#FFF' }}>
          <Scene
            key="habits"
            component={HabitsScreen}
            title="Habits"
            rightTitle="Add"
            onRight={() => {
              Actions.habitAdd();
            }}
          />
          <Scene key="habitAdd" component={HabitAddScreen} title="Add Habit" back />
        </Scene>
      </Drawer>
    </Router>
  );
};

export default RouterComponent;
