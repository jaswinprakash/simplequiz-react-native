import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from 'react-native';
import React, {useState} from 'react';
import ArrowLogo from '../../assets/icons/Arrow.svg';
import MenuLogo from '../../assets/icons/Menu.svg';
import ReplayLogo from '../../assets/icons/Comment.svg';
import LikeLogo from '../../assets/icons/Love-fill.svg';
import SendLogo from '../../assets/icons/Send.svg';
import MyModal from '../includes/MyModal';

export default function SubPage({navigation, route}) {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'A',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#7F48E2',
    },
    {
      id: 2,
      name: 'D',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#355FFE',
    },
    {
      id: 3,
      name: 'H',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#E80A19',
    },
    {
      id: 4,
      name: 'A',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#7F48E2',
    },
    {
      id: 5,
      name: 'A',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#7F48E2',
    },
    {
      id: 6,
      name: 'D',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#355FFE',
    },
    {
      id: 7,
      name: 'H',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#E80A19',
    },
    {
      id: 8,
      name: 'A',
      comments: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      reply: 3,
      like: 12,
      time: 3,
      text_color: '#7F48E2',
    },
  ]);
  const {selectedOption, answeredPercentage, balancePercentage} = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  console.log(route.params);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navBarContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={openModal}>
          <ArrowLogo width={27} height={27} />
        </TouchableOpacity>
        <MyModal isVisible={modalVisible} closeModal={closeModal} navigation={navigation}/>
        <TouchableOpacity style={styles.menuBtn}>
          <MenuLogo width={27} height={27} />
        </TouchableOpacity>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.questionText}>
          {route.params.question.question}
        </Text>
        <View style={styles.optionContainer}>
          <View style={styles.optionOne}>
            <Text
              style={[
                styles.selectedTextOne,
                selectedOption === 'trueOption' && {backgroundColor: '#355FFE'},
              ]}>
              {route.params.question.options.trueOption.value}
            </Text>

            <Image
              style={[
                styles.imageOne,
                selectedOption === 'falseOption' && styles.disabledOption,
              ]}
              source={route.params.question.options.trueOption.image}
            />
          </View>
          <View style={styles.optionTwo}>
            <Text
              style={[
                styles.selectedTextOne,
                selectedOption === 'falseOption' && {
                  backgroundColor: '#355FFE',
                },
              ]}>
              {route.params.question.options.falseOption.value}
            </Text>
            <Image
              style={[
                styles.imageTwo,
                selectedOption === 'trueOption' && styles.disabledOption,
              ]}
              source={route.params.question.options.falseOption.image}
            />
          </View>
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
      </View>
      <ScrollView contentContainerStyle={styles.commentSectionMain}>
        {comments.map(comment => (
          <View style={styles.commentSection} key={comment.id}>
            <Text
              style={[
                styles.profileText,
                {backgroundColor: comment.text_color},
              ]}>
              {comment.name}
            </Text>
            <View style={styles.commentContainer}>
              <Text style={styles.commentsText}>{comment.comments}</Text>
              <View style={styles.commentOptions}>
                <TouchableOpacity style={styles.replaySection}>
                  <ReplayLogo width={18} height={18} marginRight={5} />
                  <Text style={styles.replayText}>{comment.reply} Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeSection}>
                  <LikeLogo width={18} height={18} marginRight={5} />
                  <Text style={styles.likeText}>{comment.like} Likes</Text>
                </TouchableOpacity>
                <Text style={styles.timeText}>{comment.time} Hours ago</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Share you think"
          placeholderTextColor="#A6A6A6"></TextInput>
        <TouchableOpacity style={styles.sendBtn}>
          <SendLogo width={27} height={27} style={styles.sendLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backBtn: {
    backgroundColor: '#E8E8E8',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBtn: {
    backgroundColor: '#E8E8E8',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContainer: {},
  questionText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  optionOne: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 165,
    marginRight: 10,
    borderRadius: 15,
    position: 'relative',
  },
  optionTwo: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  selectedTextTwo: {
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
  selectedTextOne: {
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
  answerBar: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    width: '87%',
    marginBottom: 35,
    height: 50,
    alignSelf: 'center',
  },
  commentSectionMain: {},
  commentSection: {
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  profileText: {
    marginRight: 20,
    width: 40,
    height: 40,
    backgroundColor: '#7F48E2',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    borderRadius: 50,
  },
  commentContainer: {
    width: '82%',
  },
  commentsText: {
    marginBottom: 10,
    fontFamily: 'Inter-Bold',
    color: '#000',
    fontSize: 15,
  },
  commentOptions: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  replaySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  replayText: {
    color: '#A6A6A6',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
  likeText: {
    color: '#A6A6A6',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
  timeText: {
    color: '#A6A6A6',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },

  answerContainer: {},
  answerContainer: {},
  answerContainer: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
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
  disabledOption: {
    opacity: 0.5,
  },
  answerBar: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    width: '87%',
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
});
