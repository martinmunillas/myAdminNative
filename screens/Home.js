import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../App';

const Home = (props) => {
  return (
    <View style={{ ...globalStyles, ...styles.main }}>
      <Text style={styles.text}>Welcome Martin</Text>
      <Button
        color='#3f9bf7'
        title='Create User'
        onPress={() => props.navigation.navigate('createUser')}
      />
    </View>
  );
};

const styles = {
  main: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontSize: 24, marginBottom: 15 },
};

export default Home;
