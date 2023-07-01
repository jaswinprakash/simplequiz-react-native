import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ArrowLogo from '../../assets/icons/Arrow.svg';
import MenuLogo from '../../assets/icons/Menu.svg';
import ReplayLogo from '../../assets/icons/Comment.svg';
import LikeLogo from '../../assets/icons/Love-fill.svg';
import SendLogo from '../../assets/icons/Send.svg';

export default function SubPage() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navBarContainer}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowLogo width={27} height={27} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <MenuLogo width={27} height={27} />
        </TouchableOpacity>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.questionText}>Which one is cleaner preview?</Text>
        <View style={styles.optionContainer}>
          <View style={styles.optionOne}>
            <Text style={styles.selectedTextOne}>1</Text>
            <Image
              style={styles.imageOne}
              source={require('../../assets/images/blurry.jpg')}
            />
          </View>
          <View style={styles.optionTwo}>
            <Text style={styles.selectedTextTwo}>2</Text>
            <Image
              style={styles.imageTwo}
              source={require('../../assets/images/clear.jpg')}
            />
          </View>
        </View>
        <View style={styles.answerBar}></View>
      </View>
      <ScrollView contentContainerStyle={styles.commentSectionMain}>
        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.profileText}>A</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentsText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Text>
            <View style={styles.commentOptions}>
              <TouchableOpacity style={styles.replaySection}>
                <ReplayLogo width={18} height={18} marginRight={5} />
                <Text style={styles.replayText}>3 Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeSection}>
                <LikeLogo width={18} height={18} marginRight={5} />
                <Text style={styles.likeText}>12 Likes</Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>3 Hours ago</Text>
            </View>
          </View>
        </View>
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
});
