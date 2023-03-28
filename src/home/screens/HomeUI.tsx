import React from 'react';
import type {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeMenu from '../components/HomeMenu';
import HomeListTransactions from '../components/HomeListTransactions';

const HomeUI: FC = () => {
  const transactions = [
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
    {
      value: '80.000',
      description: 'Transfer to 08222222222',
      date: '20/08/2022',
    },
  ];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Balance :</Text>
        <Text style={styles.headerContent}>Rp. 1.234.567.000</Text>
      </View>

      <View style={styles.body}>
        <HomeMenu />

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>5 Latest Transaction</Text>
          <HomeListTransactions data={transactions} />
        </View>
      </View>
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
  body: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  listContainer: {
    marginTop: 22,
  },
  listTitle: {fontSize: 14, color: '#000000', marginBottom: 12},
});

export default HomeUI;
