import React from 'react';
import {FlatList} from 'react-native';
import Post from '../..';
import Stories from '../../../Stories';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://protalismany.ru/wp-content/uploads/2018/11/na-foto-s-ulibkoi.jpg',
      name: 'Jon',
    },
    imageUri:
      'https://avatars.mds.yandex.net/get-zen_doc/4414226/pub_6099a55bdc006e5b71b91c37_6099a6f2b8e935293cda5227/scale_1200',
    caption: 'Nice picture #instagram',
    likesCount: '1863',
    postedAt: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://protalismany.ru/wp-content/uploads/2018/11/na-foto-s-ulibkoi.jpg',
      name: 'Jon',
    },
    imageUri:
      'https://aviasovet.ru/best/wp-content/uploads/2013/02/azorskie-ostrova-v-portugalii-thumb-9.jpg',
    caption: 'Nice picture #instagram',
    likesCount: '65',
    postedAt: '10 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://protalismany.ru/wp-content/uploads/2018/11/na-foto-s-ulibkoi.jpg',
      name: 'Jon',
    },
    imageUri:
      'https://funart.pro/uploads/posts/2021-04/1618800376_22-funart_pro-p-portugaliya-azorskie-ostrova-krasivie-mest-23.jpg',
    caption: 'Nice picture #instagram',
    likesCount: '189',
    postedAt: '20 minutes ago',
  },
  {
    id: '4',
    user: {
      imageUri:
        'https://protalismany.ru/wp-content/uploads/2018/11/na-foto-s-ulibkoi.jpg',
      name: 'Jon',
    },
    imageUri: 'https://oir.mobi/uploads/posts/2020-01/1578230189_44-68.jpg',
    caption: 'Nice picture #instagram',
    likesCount: '3896',
    postedAt: '1 hour ago',
  },
];

const Feed = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Post post={item} />}
    keyExtractor={({id}) => id}
    ListHeaderComponent={Stories}
  />
);

export default Feed;
