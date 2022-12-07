import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "./src/redux/store";

const App = () => {

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar />
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};


export default App;
