import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import AppPage from './src/components/appPage';

const App = () => {
  return (
    <Provider store={store} >
      <AppPage />
    </Provider>
  )
}

export default App;