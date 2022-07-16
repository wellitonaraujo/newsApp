import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { Feed } from './src/screens/feed';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  );
};

export default App;