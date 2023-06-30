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
import Search from '../../assets/icons/search.svg';

export default function Home() {
  const [categories, setCategories] = useState([
    {id: 1, name: 'All'},
    {id: 2, name: 'Branding'},
    {id: 3, name: 'Animation'},
    {id: 4, name: 'Website'},
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

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
      <QuizCards key={question.id} question={question} />
    ));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbarMain}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/Logo-p.png')}
            style={styles.profile}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Search width={25} height={25} style={styles.searchLogo} />
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
      <View>{renderQuestions()}</View>
      <View style={styles.bottomCard}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E8E8E8',
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
  bottomCard: {},
});
