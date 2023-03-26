import React, {useEffect} from 'react';
import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import AuthRouter from '@/auth/router/auth.route';
import HomeRouter from '@/home/router/home.route';
import {useAppSelector} from '../hooks/app.hook';
import {useNavigation, StackActions} from '@react-navigation/native';

const {Navigator: StackNavigator, Screen: StackScreen} =
  createNativeStackNavigator();
const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

const TabRoute: FC = () => {
  const tabRoute = [...HomeRouter];
  return (
    <TabNavigator>
      {tabRoute.map((route, index) => {
        return (
          <TabScreen
            name={route.name}
            component={route.component}
            key={index}
            options={route.tabOptions}
          />
        );
      })}
    </TabNavigator>
  );
};

const AppRoute: FC = () => {
  const stackRoute = [...AuthRouter];

  const auth_token = useAppSelector(state => state.auth.auth_token);
  const navigation = useNavigation();
  useEffect(() => {
    SplashScreen.hide();

    if (!auth_token) {
      return navigation.dispatch(StackActions.replace('Login'));
    }
    return navigation.dispatch(StackActions.replace('Root'));
  }, [auth_token, navigation]);

  return (
    <StackNavigator>
      {stackRoute.map((route, index) => {
        return (
          <StackScreen
            name={route.name}
            component={route.component}
            key={index}
            options={route.options}
          />
        );
      })}
      <StackScreen
        name="Root"
        component={TabRoute}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator>
  );
};

export default AppRoute;
