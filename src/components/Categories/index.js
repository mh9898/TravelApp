import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Categories = ({categories}) => {
  const categories_ = [
    {name: 'Beaches', id: 1},
    {name: 'Mountains', id: 2},
    {name: 'Cities', id: 3},
    {name: 'Adventure', id: 4},
    {name: 'Nature', id: 5},
  ];

  return (
    <FlatList data={categories} renderItem={({item}) => <Text>{item}</Text>} />
  );
};

export default React.memo(Categories);

const styles = StyleSheet.create({});
