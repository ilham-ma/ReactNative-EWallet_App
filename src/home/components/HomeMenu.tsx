import BaseCard from '@/app/components/base/BaseCard';
import React from 'react';
import type {FC} from 'react';
import {Text} from 'react-native';
import {BiScan} from 'react-icons/bi';
import type {IconType} from 'react-icons';

interface IMenu {
  label: string;
  navigate: string;
  icon: IconType;
}

const HomeMenu: FC = () => {
  const menus: IMenu[] = [{label: 'Top Up', navigate: 'Topup', icon: BiScan}];
  return (
    <BaseCard bgColor="#4982C1">
      {menus.map((menu: IMenu, index: number) => {
        return (
          <BaseCard key={index}>
            <Text>{menu.label}</Text>
          </BaseCard>
        );
      })}
    </BaseCard>
  );
};

export default HomeMenu;

// const styles = StyleSheet.create({});
