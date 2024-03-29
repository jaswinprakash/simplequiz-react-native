import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ArrowLogo from '../../assets/icons/Arrow.svg';
import MenuLogo from '../../assets/icons/Menu.svg';
import ReplayLogo from '../../assets/icons/Comment.svg';
import LikeLogo from '../../assets/icons/Love-fill.svg';
import SendLogo from '../../assets/icons/Send.svg';
import MyModal from '../includes/MyModal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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

  // console.log(route.params);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navBarContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={
            selectedOption === null ? () => navigation.goBack() : openModal
          }>
          <ArrowLogo width={wp('6%')} height={hp('3%')} />
        </TouchableOpacity>
        <MyModal
          isVisible={modalVisible}
          closeModal={closeModal}
          navigation={navigation}
          selectedOption={selectedOption}
        />
        <TouchableOpacity style={styles.menuBtn}>
          <MenuLogo width={wp('6%')} height={hp('3%')} />
        </TouchableOpacity>
      </View>

      <View style={styles.answerContainer}>
        <Text style={styles.questionText}>
          {route.params.question.question}
        </Text>
        <View style={styles.optionContainer}>
          <View
            style={[
              styles.optionOne,
              selectedOption === 'falseOption' && styles.disabledOption,
            ]}>
            <Text
              style={[
                styles.selectedTextOne,
                selectedOption === 'trueOption'
                  ? styles.selectedText
                  : styles.unselectedText,
              ]}>
              {route.params.question.options.trueOption.value}
            </Text>

            <Image
              style={styles.imageOne}
              source={route.params.question.options.trueOption.image}
            />
          </View>
          <View
            style={[
              styles.optionTwo,
              selectedOption === 'trueOption' && styles.disabledOption,
            ]}>
            <Text
              style={[
                styles.selectedTextOne,
                selectedOption === 'falseOption'
                  ? styles.selectedText
                  : styles.unselectedText,
              ]}>
              {route.params.question.options.falseOption.value}
            </Text>
            <Image
              style={styles.imageTwo}
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
      <ScrollView
        contentContainerStyle={styles.commentSectionMain}
        showsVerticalScrollIndicator={true}>
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
                  <ReplayLogo
                    width={wp('5%')}
                    height={hp('2.5%')}
                    marginRight={5}
                  />
                  <Text style={styles.replayText}>{comment.reply} Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeSection}>
                  <LikeLogo
                    width={wp('5%')}
                    height={hp('2.5%')}
                    marginRight={5}
                  />
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
          placeholderTextColor="#A6A6A6"
        />
        <TouchableOpacity style={styles.sendBtn}>
          <SendLogo
            width={wp('6%')}
            height={hp('3%')}
            style={styles.sendLogo}
          />
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
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('3%'),
  },
  backBtn: {
    backgroundColor: '#E8E8E8',
    borderRadius: 50,
    width: wp('14%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBtn: {
    backgroundColor: '#E8E8E8',
    borderRadius: 50,
    width: wp('14%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContainer: {},
  questionText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  optionOne: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('21%'),
    width: wp('41.5%'),
    marginRight: 10,
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  optionTwo: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('21%'),
    width: wp('41.5%'),
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  selectedTextTwo: {
    position: 'absolute',
    left: 5,
    bottom: 115,
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
    backgroundColor: '#AEAEAE',
  },
  selectedText: {
    backgroundColor: '#355FFE',
  },
  imageOne: {
    height: hp('21%'),
    width: wp('41.5%'),
  },
  imageTwo: {
    height: hp('21%'),
    width: wp('41.5%'),
  },
  commentSectionMain: {},
  commentSection: {
    flexDirection: 'row',
    paddingHorizontal: wp('7%'),
  },
  profileText: {
    marginRight: 20,
    width: wp('10%'),
    height: hp('5%'),
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  inputText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    width: wp('65%'),
  },
  sendBtn: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: wp('10%'),
    height: hp('5%'),
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
    width: wp('86.5%'),
    marginBottom: hp('4%'),
  },
  answered: {
    backgroundColor: '#355FFE',
    justifyContent: 'center',
    paddingVertical: hp('2%'),
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
