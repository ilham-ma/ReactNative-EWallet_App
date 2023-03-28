import React from 'react';
import type {FC} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BaseCard from '@/app/components/base/BaseCard';
import IcSwapHorizontal from '@/assets/icons/ic-swap_horiz.svg';

interface IData {
  value: string;
  description: string;
  date: string;
}

interface IProps {
  data: IData[];
}

const HomeListTransactions: FC<IProps> = (props: IProps) => {
  const renderItem = ({item}: any): JSX.Element => {
    return (
      <BaseCard>
        <View style={styles.container}>
          <View style={styles.icon}>
            <IcSwapHorizontal />
          </View>
          <View>
            <Text style={styles.text}>{`Rp. ${item.value}`}</Text>
            <Text style={styles.text}>{`${item.description}`}</Text>
          </View>
          <Text style={styles.text}>{item.date}</Text>
        </View>
      </BaseCard>
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      style={styles.containerList}
    />
  );
};

export default HomeListTransactions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
  },
  containerList: {
    height: '68%',
  },
});
