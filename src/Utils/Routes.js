import React from 'react';
import { Scene, Router, Drawer, Stack, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TodayScreen from '../screenToday/TodayScreen';
import TodayEditScreen from '../screenTodayEdit/TodayEditScreen';
import HabitsScreen from '../screenHabits/HabitsScreen';
import HabitAddScreen from '../screenHabitAdd/HabitAddScreen';
import MainDrawer from '../navigation/MainDrawer';

const imageIcon = () => {
  return <Icon name="pencil-alt" onPress={() => Actions.todayEdit()} />;
};

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
            renderRightButton={imageIcon}
            onRight={() => {}}
          />
          <Scene key="todayEdit" component={TodayEditScreen} title="Edit Today" back />
        </Stack>
        <Scene key="edits" initial>
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
