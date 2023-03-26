import React from 'react';
import {useAppDispatch, useAppSelector} from '@/app/hooks/app.hook';
import {View, Text, Button} from 'react-native';
import {auth_SET_TOKEN} from '../redux/auth.slice';

const LoginUI = () => {
  const auth_token = useAppSelector(({auth}) => auth.auth_token);
  const auth_loading = useAppSelector(state => state.auth.auth_loading);
  const dispatch = useAppDispatch();

  const changeToken = (): void => {
    dispatch(auth_SET_TOKEN('testing token persist'));
  };

  return (
    <View>
      <Text style={{color: 'black', fontSize: 36, fontWeight: 'bold'}}>
        ini token = {auth_token}
      </Text>
      <Text style={{color: 'black', fontSize: 22}}>
        {auth_loading.toString()}
      </Text>
      <Button title="isi token" onPress={changeToken} />
    </View>
  );
};

export default LoginUI;
