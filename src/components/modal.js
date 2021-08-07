import React from 'react';
import { StyleSheet, View, Dimensions, Modal } from 'react-native';
const {width, height} = Dimensions.get('screen');

export default ({ visibility, children, downModal, upModal }) => {
  return (
    <Modal
      position='absolute'
      visible={visibility}
      animationType= "slide"
      transparent={true}
    >
      {downModal ? <View style={styles.center}/> : null}
      <View style={styles.center}>
          <View style={styles.ModalView}>
            {children}
          </View>
      </View>
      {upModal ? <View style={styles.center}/> : null}
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  ModalView: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: width-150,
    maxWidth: width-30,
    maxHeight: height-120,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

