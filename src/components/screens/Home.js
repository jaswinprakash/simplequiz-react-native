import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import QuizCards from './QuizCards';
import Search from '../../assets/icons/search.svg';

export default function Home() {
  return (
    <View style={styled.mainContainer}>
      <View style={styled.navbarMain}>
        <View style={styled.profile}></View>
        <Search width={50} height={50}/>
      </View>
      <ScrollView
        contentContainerStyle={styled.filters}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
      </ScrollView>
      <QuizCards/>
      <View style={styled.bottomCard}></View>
    </View>
  );
}

const styled = StyleSheet.create({
  mainContainer: {},
  navbarMain: {},
  profile: {},
  search: {},
  filters: {},
  bottomCard: {},
});
