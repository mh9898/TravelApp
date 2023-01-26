import {FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Categories = ({categories, selected, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      style={{marginRight: -32}}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onCategoryPress(item)}>
          <Text style={[styles.item, selected === item ? styles.selected : {}]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default React.memo(Categories);
