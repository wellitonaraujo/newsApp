
import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, RefreshControl, Text, useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../redux/actions';
import uuid from 'react-native-uuid';
import styles from './styles';
import { NewsArticle } from '../NewsArticle';
import { NewsCategory } from '../../constants';

export const Feed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(NewsCategory.sports);

  const {newsFeed} = useSelector((state: any) => state.feedReducer);
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);


  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <FlatList
        keyExtractor={() => uuid.v4()?.toString()}
        showsVerticalScrollIndicator={false}
        data={newsFeed}
        renderItem={({item}: any) => <NewsArticle post={item} />}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        style={styles.list}
      />
    </View>
  );
};