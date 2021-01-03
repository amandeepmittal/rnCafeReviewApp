import React from 'react';

import RootNavigator from './src/navigation/RootNavigator';
import {AuthUserProvider} from './src/navigation/AuthUserProvider';

const App = () => {
  return (
    <AuthUserProvider>
      <RootNavigator />
    </AuthUserProvider>
  );
};

export default App;
