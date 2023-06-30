import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function QuizCards({question}) {
  const answeredPercentage = 60;
  const balancePercentage = 40;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = option => {
    setSelectedOption(option);
  };

  return (
    <TouchableOpacity>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        <View style={styles.optionContainer}>

          <TouchableOpacity
            style={[
              styles.singleViewOne,
              selectedOption === 'trueOption' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelection('trueOption')}>
            <Text
              style={[
                styles.firstText,
                selectedOption === 'trueOption'
                  ? styles.selectedText
                  : styles.unselectedText,
              ]}>
              {question.options.trueOption.value}
            </Text>
            <Image
              style={styles.imageOne}
              source={question.options.trueOption.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.singleViewTwo,
              selectedOption === 'falseOption' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelection('falseOption')}>
            <Text
              style={[
                styles.secondText,
                selectedOption === 'falseOption'
                  ? styles.selectedText
                  : styles.unselectedText,
              ]}>
              {question.options.falseOption.value}
            </Text>
            <Image
              style={styles.imageTwo}
              source={question.options.falseOption.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.answerBar}>
          <View style={[styles.answered, {flex: answeredPercentage}]}>
            <Text style={styles.answeredText}>{answeredPercentage}%</Text>
          </View>
          <View style={[styles.balance, {flex: balancePercentage}]}>
            <Text style={styles.balanceText}>{balancePercentage}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#fff',
    width: '85%',
    height: '75%',
    borderRadius: 15,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  questionText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 19,
    textAlign: 'center',
    paddingVertical: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  singleViewOne: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    position: 'relative',
  },
  singleViewTwo: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'relative',
  },
  imageOne: {
    height: undefined,
    width: 150,
    aspectRatio: 395 / 321,
  },
  imageTwo: {
    height: undefined,
    width: 150,
    aspectRatio: 395 / 321,
  },
  firstText: {
    position: 'absolute',
    left: 5,
    bottom: 115,
    backgroundColor: '#355FFE',
    zIndex: 1,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: '#fff',
  },
  secondText: {
    position: 'absolute',
    left: 5,
    bottom: 115,
    backgroundColor: '#E8E8E8',
    zIndex: 1,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: '#fff',
  },
  unselectedText: {
    backgroundColor: '#E8E8E8',
  },
  selectedText: {
    backgroundColor: '#355FFE',
  },
  answerBar: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    width: '93%',
  },
  answered: {
    backgroundColor: '#355FFE',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  answeredText: {
    textAlign: 'center',
    color: '#fff',
  },
  balance: {
    justifyContent: 'center',
  },
  balanceText: {
    textAlign: 'center',
    color: '#355FFE',
  },
});
