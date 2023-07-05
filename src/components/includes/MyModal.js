import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import CloseLogo from '../../assets/icons/Close.svg';

export default function MyModal({
  isVisible,
  closeModal,
  navigation,
  selectedOption,
}) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selectedOption === 'trueOption') {
      setScore(5);
    } else {
      setScore(0);
    }
  }, [selectedOption]);

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      onRequestClose={closeModal}
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.logoContainer}>
            <CloseLogo width={30} height={30} style={styles.closeLogo} />
          </TouchableOpacity>
          <Image
            style={styles.profileImg}
            source={require('../../assets/icons/P-Logo-popup.png')}
          />
          <Text style={styles.mainText}>
            You got {score} points from answering the question
          </Text>
          <Text style={styles.subText}>
            Keep answering questions and earn points for asking later
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backBtn}>
            <Text style={styles.backBtnTxt}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  backBtn: {
    marginTop: 10,
    backgroundColor: '#355FFE',
    paddingVertical: 20,
    borderRadius: 10,
    width: 180,
    alignSelf: 'center',
  },
  backBtnTxt: {
    textAlign: 'center',
    color: '#fff',
  },
  logoContainer: {
    alignItems: 'flex-end',
  },
  closeLogo: {},
  mainText: {
    fontFamily: 'Inter-Bold',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    width: 250,
    marginBottom: 10,
  },
  subText: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImg: {
    width: 150,
    aspectRatio: 138 / 138,
    alignSelf: 'center',
    marginBottom: 40,
  },
});
