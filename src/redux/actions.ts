export const GET_NEWS_FEED = 'GET_NEWS_FEED';

import { apiClient } from "../api";

export const getNewsFeed = () => async (dispatch: Function) => {
    try {
      const res = await apiClient.get(
        'top-headlines?language=en&category=business',
      );
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