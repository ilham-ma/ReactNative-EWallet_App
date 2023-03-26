import {FC} from 'react';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export interface IRoute {
  name: string;
  component: FC;
  options?: NativeStackNavigationOptions;
  tabOptions?: BottomTabNavigationOptions;
}
