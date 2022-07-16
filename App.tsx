import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigation} from './src/navigation/stack.routes';
import {persistor, store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={'large'} color={'#000'} />}
        persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;