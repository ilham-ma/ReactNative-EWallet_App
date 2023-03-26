/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppRoute from './src/app/router/app.route';
import AppStore, {AppPersistor} from '@/app/redux/app.store';

const RootApp = () => {
  return (
    <ReduxProvider store={AppStore}>
      <PersistGate loading={null} persistor={AppPersistor}>
        <NavigationContainer>
          <AppRoute />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
};

AppRegistry.registerComponent(appName, () => RootApp);
