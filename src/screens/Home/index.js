import React from 'react';
import Title from '../../components/Title';
import {View} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.continuer}>
      <Title text="Where do" style={{fontWeight: 'normal'}} />
      <Title text="you want to go?" />
      <Title text="Explore attractions" style={styles.subTitle} />
    </View>
  );
};

export default Home;
