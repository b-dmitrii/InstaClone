import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Fontisto';
import PaperIcon from 'react-native-vector-icons/Ionicons';
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likesCount);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    isLiked ? setLikeCount(+likeCount + 1) : setLikeCount(+likeCount - 1);
  }, [isLiked]);

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <HeartIcon name="heart" size={25} color={'#ff0000'} />
            ) : (
              <HeartIcon name="hearto" size={25} color={'#6d6d6d'} />
            )}
          </TouchableWithoutFeedback>

          <CommentIcon name="comment" size={23} color={'#6d6d6d'} />
          <PaperIcon name="paper-plane-outline" size={25} color={'#6d6d6d'} />
        </View>
        <BookmarkIcon name="bookmark-o" size={25} color={'#6d6d6d'} />
      </View>
      <Text style={styles.likes}>{likeCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
