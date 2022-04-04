import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import ProfilePicture from '../ProfilePicture';
import styles from './style';

const Story = ({story}) => {
  const {
    user: {id, imageUri, name},
  } = story;
  const navigation = useNavigation();

  const onPressStory = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableHighlight onPress={onPressStory} underlayColor="#DDDDDD">
      <View>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Story;
