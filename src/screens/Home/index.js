import React from 'react';
import Title from '../../components/Title';
import {View} from 'react-native';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {
  return (
    <View style={styles.continuer}>
      <Title text="Where do" style={{fontWeight: 'normal'}} />
      <Title text="you want to go?" />
      <Title text="Explore attractions" style={styles.subTitle} />
      <Categories categories={['All', 'Popular', 'Historical']} />
    </View>
  );
};

export default Home;
