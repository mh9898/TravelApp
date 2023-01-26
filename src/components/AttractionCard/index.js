import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const AttractionCard = ({categories, selected, onCategoryPress}) => {
  return (
    <View>
      <Image />
      <Text>AttractionCard</Text>
    </View>
  );
};

export default React.memo(AttractionCard);
