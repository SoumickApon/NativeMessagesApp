import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppLink from 'react-native-app-link';

const MessageSender = () => {
  const [wantToChat, setWantToChat] = useState(false);

  const sendMessageToMessenger = async () => {
    try {
      const messengerDeepLink = 'https://m.me/sajib.barua2020';
      const appName = 'Messenger';
      const appStoreId = 'facebook.messenger';
      const appStoreLocale = 'us'; // Change this to the appropriate locale if necessary
      const playStoreId = 'com.facebook.orca';

      await AppLink.maybeOpenURL(messengerDeepLink, { appName, appStoreId, appStoreLocale, playStoreId });
    } catch (error) {
      console.log('Error opening Messenger:', error);
      // Handle error
    }
  };

  const handleYesClick = () => {
    setWantToChat(true);
  };

  const handleNoClick = () => {
    setWantToChat(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, wantToChat && { color: '#000' }]}>Want to chat with friends?</Text>
      {!wantToChat && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.yesButton]}
            onPress={handleYesClick}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.noButton]}
            onPress={handleNoClick}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      )}
      {wantToChat && (
        <TouchableOpacity
          style={styles.button}
          onPress={sendMessageToMessenger}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Open Messenger</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Black color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4267B2', // Facebook blue color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  yesButton: {
    backgroundColor: '#4CAF50', // Green color
  },
  noButton: {
    backgroundColor: '#FF5722', // Orange color
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MessageSender;
