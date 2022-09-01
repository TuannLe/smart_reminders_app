import React, { type PropsWithChildren } from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />

      {/* <Text>ii</Text> */}
    </SafeAreaProvider>
  );
};


export default App;
