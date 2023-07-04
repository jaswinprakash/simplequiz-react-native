import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import SendLogo from '../../assets/icons/Send.svg';

export default function QuizCards({question, navigation, onOptionSelection}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const [answeredPercentage, setAnsweredPercentage] = useState(null);
  const [balancePercentage, setBalancePercentage] = useState(null);

  const [isSingleViewOneDisabled, setIsSingleViewOneDisabled] = useState(false);
  const [isSingleViewTwoDisabled, setIsSingleViewTwoDisabled] = useState(false);

  const handleOptionSelection = option => {
    onOptionSelection(option);
    if (option === 'trueOption') {
      setAnsweredPercentage(60);
      setBalancePercentage(40);
    } else {
      setAnsweredPercentage(null);
      setBalancePercentage(null);
    }
    setSelectedOption(option);

    if (option === 'trueOption') {
      setIsSingleViewTwoDisabled(true);
    } else {
      setIsSingleViewOneDisabled(true);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('SubPage', {
          selectedOption,
          question,
          answeredPercentage,
          balancePercentage,
        })
      }>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.singleViewOne,
              selectedOption === 'trueOption' && styles.selectedOption,
              isSingleViewOneDisabled && styles.disabledOption,
            ]}
            onPress={() => handleOptionSelection('trueOption')}
            disabled={isSingleViewOneDisabled}>
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
              isSingleViewTwoDisabled && styles.disabledOption,
            ]}
            onPress={() => handleOptionSelection('falseOption')}
            disabled={isSingleViewTwoDisabled}>
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
            {selectedOption === 'trueOption' ? (
              <Text style={styles.answeredText}>{answeredPercentage}%</Text>
            ) : (
              <Text style={styles.answeredText}></Text>
            )}
          </View>
          <View style={[styles.balance, {flex: balancePercentage}]}>
            {selectedOption === null && (
              <Text style={styles.balanceText}></Text>
            )}
            {selectedOption !== null && balancePercentage !== null && (
              <Text style={styles.balanceText}>
                {balancePercentage !== 0 ? `${balancePercentage}%` : ''}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Share you think"
            placeholderTextColor="#A6A6A6"></TextInput>

          <TouchableOpacity
            style={styles.sendBtn}
            onPress={() =>
              navigation.navigate('SubPage', {
                selectedOption,
                question,
                answeredPercentage,
                balancePercentage,
              })
            }>
            <SendLogo width={27} height={27} style={styles.sendLogo} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#fff',
    width: '92%',
    borderRadius: 15,
    alignSelf: 'center',
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
    height: 165,
    marginRight: 10,
    borderRadius: 15,
    position: 'relative',
  },
  singleViewTwo: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  imageOne: {
    height: undefined,
    width: 165,
    aspectRatio: 395 / 321,
  },
  imageTwo: {
    height: undefined,
    width: 165,
    aspectRatio: 395 / 321,
  },

  firstText: {
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
    width: '94%',
    marginBottom: 20,
  },
  answered: {
    backgroundColor: '#355FFE',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  answeredText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Inter-Medium',
  },
  balance: {
    justifyContent: 'center',
  },
  balanceText: {
    textAlign: 'center',
    color: '#355FFE',
    fontFamily: 'Inter-Medium',
  },
  disabledOption: {
    opacity: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    width: '80%',
  },
  sendBtn: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 40,
    height: 40,
  },
});
