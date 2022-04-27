import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;