import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  children:React.ReactNode;
  onClose: () => void;
}>;

export default function ItemModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className='rounded-2xl  border border-gray-300 bg-white shadow' style={styles.modalContent}>
        <View  className='border border-gray-300'style={styles.titleContainer}>
          <Text  style={styles.title}>Item details</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="black" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 16,
  },
});
