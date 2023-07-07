import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import QuizCards from '../includes/QuizCards';
import SearchLogo from '../../assets/icons/search.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home({navigation}) {
  const [categories, setCategories] = useState([
    {id: 1, name: 'All'},
    {id: 2, name: 'Branding'},
    {id: 3, name: 'Animation'},
    {id: 4, name: 'Website'},
    {id: 5, name: 'Application'},
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Which one is cleaner preview?',
      options: {
        trueOption: {
          image: require('../../assets/images/blurry.png'),
          value: 1,
        },
        falseOption: {
          image: require('../../assets/images/clear.png'),
          value: 2,
        },
      },
    },
  ]);

  const renderCategories = () =>
    categories.map(category => (
      <TouchableHighlight
        key={category.id}
        style={[
          styles.categoryView,
          selectedCategory === category.id && {
            backgroundColor: '#000',
          },
        ]}
        onPress={() => setSelectedCategory(category.id)}
        underlayColor={selectedCategory === category.id ? '#000' : '#fff'}>
        <Text
          style={[
            styles.categoryText,
            selectedCategory === category.id && {color: '#fff'},
          ]}>
          {category.name}
        </Text>
      </TouchableHighlight>
    ));

  const renderQuestions = () =>
    questions.map(question => (
      <QuizCards
        key={question.id}
        question={question}
        navigation={navigation}
        onOptionSelection={option => setSelectedOption(option)}
      />
    ));

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.navbarMain}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Logo-p.png')}
                style={styles.profile}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchContainer}>
              <SearchLogo width={wp('6%')} height={hp('6%')} />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView
              contentContainerStyle={styles.filters}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {renderCategories()}
            </ScrollView>
          </View>
          <View style={styles.questionContainer}>
            <View style={styles.cardOne}></View>
            <View style={styles.cardTwo}></View>
            {renderQuestions()}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomCard}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  navbarMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
  },
  profile: {
    height: undefined,
    width: wp('32%'),
    aspectRatio: 137 / 56,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: wp('13%') / 2,
    width: wp('13%'),
    height: wp('13%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryView: {
    backgroundColor: '#fff',
    height: hp('6%'),
    borderRadius: hp('2%'),
    marginRight: wp('2.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('13%'),
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: hp('2%'),
    color: '#A6A6A6',
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },
  filters: {
    paddingLeft: 20,
  },
  bottomCard: {
    backgroundColor: '#fff',
    height: hp('6%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  questionContainer: {
    position: 'relative',
  },
  cardOne: {
    backgroundColor: '#eee',
    height: hp('6%'),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 355,
    left: 35,
    right: 0,
    width: wp('82%'),
    elevation: 4,
    zIndex: -1,
  },
  cardTwo: {
    backgroundColor: '#eee',
    height: hp('6%'),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 380,
    left: 55,
    right: 0,
    width: wp('70%'),
    elevation: 4,
    zIndex: -2,
  },
});
