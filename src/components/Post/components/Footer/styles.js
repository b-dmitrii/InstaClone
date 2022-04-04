import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: '600',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#c4c4c4',
    margin: 3,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  left: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
