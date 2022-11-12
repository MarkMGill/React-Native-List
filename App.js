import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigator from './routes/drawer';

const App = () => {
  
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

// start at tutorial #27  https://www.youtube.com/watch?v=2s5KNg_5_LA