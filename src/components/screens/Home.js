import {View, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import QuizCards from './QuizCards';
import Search from '../../assets/icons/search.svg';

export default function Home() {
  return (
    <View style={styled.mainContainer}>
      <View style={styled.navbarMain}>
        <Image
          source={require('../../assets/icons/Logo-p.png')}
          style={styled.profile}
        />
        <View style={styled.searchContainer}>
          <Search width={25} height={25} style={styled.searchLogo} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styled.filters}
        horizontal={true}
        showsHorizontalScrollIndicator={false}></ScrollView>
      <QuizCards />
      <View style={styled.bottomCard}></View>
    </View>
  );
}

const styled = StyleSheet.create({
  mainContainer: {},
  navbarMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
  },
  profile: {
    height: undefined,
    width: 150,
    aspectRatio: 137 / 56,
  },
  searchLogo: {},
  filters: {},
  bottomCard: {},
});
