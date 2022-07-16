
import React, {useEffect} from 'react';
import {FlatList, Text, useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../redux/actions';
import uuid from 'react-native-uuid';
import styles from './styles';
import { NewsArticle } from '../NewsArticle';

export const Feed: React.FC = () => {
  const {newsFeed} = useSelector((state: any) => state.feedReducer);
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getNewsFeed());
  }, [dispatch]);
  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';


  return (
    <View style={[styles.container, {backgroundColor}]}>
      <FlatList
      keyExtractor={() => uuid.v4()}
      showsVerticalScrollIndicator={false}
      data={newsFeed}
      renderItem={({item, index}: any) => (
        <NewsArticle post={item} />
      )}
      style={styles.list}
    />
    </View>
  );
};