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

export default function Home({navigation}) {
  const [categories, setCategories] = useState([
    {id: 1, name: 'All'},
    {id: 2, name: 'Branding'},
    {id: 3, name: 'Animation'},
    {id: 4, name: 'Website'},
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Which one is cleaner preview?',
      options: {
        trueOption: {
          image: require('../../assets/images/blurry.jpg'),
          value: 1,
        },
        falseOption: {
          image: require('../../assets/images/clear.jpg'),
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
              <SearchLogo width={25} height={25} style={styles.searchLogo} />
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
            <TouchableOpacity
              onPress={() => navigation.navigate('SubPage', {selectedOption})}>
              {renderQuestions()}
            </TouchableOpacity>
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
    paddingBottom: '8%',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  navbarMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profile: {
    height: undefined,
    width: 145,
    aspectRatio: 137 / 56,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchLogo: {},
  categoryView: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 15,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 17,
    color: '#A6A6A6',
  },
  filters: {
    paddingLeft: 20,
  },
  bottomCard: {
    backgroundColor: '#fff',
    height: '6%',
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
    height: '6%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 380,
    left: 35,
    right: 0,
    width: '82%',
    elevation: 4,
    zIndex: -1,
  },
  cardTwo: {
    backgroundColor: '#eee',
    height: '6%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 397,
    left: 55,
    right: 0,
    width: '70%',
    elevation: 4,
    zIndex: -2,
  },
});
