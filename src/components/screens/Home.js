import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import QuizCards from './QuizCards';

export default function Home() {
  return (
    <View style={styled.mainContainer}>
      <View style={styled.navbarMain}>
        <View style={styled.profile}></View>
        <View style={styled.search}></View>
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
