import React from 'react';
import type {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeMenu from '../components/HomeMenu';

const HomeUI: FC = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Balance :</Text>
        <Text style={styles.headerContent}>Rp. 1.234.567.000</Text>
      </View>

      <HomeMenu />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerTitle: {
    color: '#484848',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
  },
  headerContent: {
    color: '#575757',
    fontWeight: '500',
    fontSize: 36,
    lineHeight: 42,
    marginTop: 10,
  },
});

export default HomeUI;
