import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Categories = ({categories}) => {
  return (
    <FlatList data={categories} renderItem={({item}) => <Text>{item}</Text>} />
  );
};

export default React.memo(Categories);

const styles = StyleSheet.create({});
