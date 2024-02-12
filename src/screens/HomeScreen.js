// src/screens/HomeScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessageSender from '../components/MessageSender';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MessageSender />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
