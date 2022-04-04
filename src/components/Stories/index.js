import React from 'react';
import {FlatList, View} from 'react-native';

import Story from '../Story';
import styles from './style';
import storiesData from '../../data/stories';

const Stories = () => (
  <FlatList
    style={styles.stories}
    data={storiesData}
    renderItem={({item}) => <Story story={item} />}
    keyExtractor={({user}) => user.id}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

export default Stories;
