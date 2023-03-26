import React from 'react';
import type {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IProps {
  text: string;
  bgColor?: string;
  color?: string;
}

const BaseButton: FC<IProps> = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{...styles.text, color: props.color ?? 'black'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
  },
});

export default BaseButton;
