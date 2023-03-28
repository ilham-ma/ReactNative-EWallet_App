import BaseCard from '@/app/components/base/BaseCard';
import React from 'react';
import type {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IcAdd from '@/assets/icons/ic-add.svg';
import IcFocus from '@/assets/icons/ic-center_focus_weak.svg';
import IcTrending from '@/assets/icons/ic-trending_flat.svg';

interface IMenu {
  label: string;
  navigate: string;
  icon: JSX.Element;
}

const HomeMenu: FC = () => {
  const iconProps = {width: 36, height: 36, fill: '#0000008a'};
  const menus: IMenu[] = [
    {
      label: 'Top Up',
      navigate: 'Topup',
      icon: <IcAdd {...iconProps} />,
    },
    {
      label: 'QR Pay',
      navigate: 'Qrpay',
      icon: <IcFocus {...iconProps} />,
    },
    {
      label: 'Transfer',
      navigate: 'Transfer',
      icon: <IcTrending {...iconProps} />,
    },
  ];

  return (
    <>
      <BaseCard bgColor="#4982C1" style={styles.container}>
        {menus.map((menu: IMenu, index: number) => {
          return (
            <View style={styles.item} key={index}>
              <BaseCard bgColor="white" style={styles.itemIcon}>
                {menu.icon}
              </BaseCard>
              <Text style={styles.itemText}>{menu.label}</Text>
            </View>
          );
        })}
      </BaseCard>
    </>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  icon: {width: 32, height: 32, alignSelf: 'center'},
  item: {
    borderRadius: 4,
    justifyContent: 'center',
  },
  itemIcon: {padding: 12},
  itemText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
    color: '#ffffff',
    marginTop: 10,
  },
});
