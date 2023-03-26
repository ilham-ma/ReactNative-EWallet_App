import React from 'react';
import type {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  children?: any;
  bgColor?: string;
}

const BaseCard: FC<IProps> = (props: IProps) => {
  return (
    <View style={{...styles.card, backgroundColor: props.bgColor}}>
      {props.children}
    </View>
  );
};

export default BaseCard;

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 4,
  },
});
