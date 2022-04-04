import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import CameraIcon from 'react-native-vector-icons/Feather';
import PaperIcon from 'react-native-vector-icons/Ionicons';

import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';
import storiesData from '../../data/stories';

const StoryScreen = () => {
  const [userStory, setUserStory] = useState(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    const userStories = storiesData.find(
      storiesData => storiesData.user.id === userId,
    );

    setUserStory(userStories);
    setActiveStoryIdx(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const hundleNextStory = () => {
    if (activeStoryIdx >= userStory.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIdx(activeStoryIdx + 1);
  };
  const hundlePrevStory = () => {
    if (activeStoryIdx <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIdx(activeStoryIdx - 1);
  };

  const hundlePress = e => {
    const x = e.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      hundlePrevStory();
    } else {
      hundleNextStory();
    }
  };

  if (!userStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStory.stories[activeStoryIdx];

  return (
    <SafeAreaView style={{height: '100%'}}>
      <TouchableWithoutFeedback onPress={hundlePress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ProfilePicture uri={userStory.user.imageUri} size={50} />
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
              {userStory.user.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <CameraIcon
              name="camera"
              size={25}
              color={'#fff'}
              style={{marginLeft: 10}}
            />
            <TextInput
              style={{
                width: '70%',
                height: 50,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 50,
                color: '#fff',
                textAlign: 'center',
                fontSize: 16,
              }}
              placeholder="Send Message"
              placeholderTextColor={'#fff'}
            />
            <PaperIcon
              name="paper-plane-outline"
              size={25}
              color={'#fff'}
              style={{marginRight: 10}}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
