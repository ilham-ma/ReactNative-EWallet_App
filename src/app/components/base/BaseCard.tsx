import React from 'react';
import type {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import type {ViewStyle} from 'react-native';

interface IProps {
  children?: any;
  bgColor?: string;
  style?: ViewStyle;
  isUsingShadow?: boolean;
}

const BaseCard: FC<IProps> = (props: IProps) => {
  const renderStyles = (): ViewStyle => ({
    ...styles.card,
    backgroundColor: props.bgColor ?? '#ffffff',
    elevation: props.isUsingShadow ? 1 : 0,
    ...props.style,
  });

  return <View style={renderStyles()}>{props.children}</View>;
};

export default BaseCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginVertical: 10,
  },
});
