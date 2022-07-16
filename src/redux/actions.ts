export const GET_NEWS_FEED = 'GET_NEWS_FEED';

import { apiClient } from "../api";

export const getNewsFeed = (setIsLoading: Function) => async (dispatch: Function) => {
    try {
      setIsLoading(true);
      const res = await apiClient.get(
        'top-headlines?language=en&category=business',
      );
      setIsLoading(false);
      if (res.status === 200) {
        dispatch({
          type: GET_NEWS_FEED,
          payload: res?.data?.articles,
        });
      } else {
        console.warn('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };