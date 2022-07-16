import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';
import { Feed } from './src/screens/feed';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={'large'} color={'#000'} />}
        persistor={persistor}>
      <Feed />
      </PersistGate>
    </Provider>
  );
};

export default App;