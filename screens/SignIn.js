import Axios from 'axios';
import React, { useState } from 'react';
import { Button, TextInput, ScrollView, Text } from 'react-native';
import { globalStyles } from '../App';
import { API_URL } from '@env';

const SignIn = (props) => {
  const [state, setState] = useState({
    form: {
      email: '',
      password: '',
    },
    errors: [],
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      form: { ...state.form, [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    const { form } = state;
    let errors = [];
    if (!form.email) {
      errors.push('No email');
    }
    if (!form.password) {
      errors.push('No password');
    }
    if (!errors.length) {
      try {
        const req = await Axios({
          method: 'POST',
          url: `https://cors-anywhere.herokuapp.com/${API_URL}/auth/sign-in`,
          auth: {
            username: form.email,
            password: form.password,
          },
        });
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    }
    setState({
      ...state,
      errors,
    });
  };
  return (
    <ScrollView style={{ ...globalStyles, ...styles.container }}>
      {state.errors.length ? (
        <Text style={styles.warningText}>Error: {state.errors.join(', ')}</Text>
      ) : (
        ''
      )}
      <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={(value) => handleChange('email', value)}
      />

      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={(value) => handleChange('password', value)}
      />

      <Button title='Sign In!' onPress={handleSubmit} />
    </ScrollView>
  );
};
const styles = {
  container: {
    flex: 1,
    padding: 35,
  },
  input: {
    padding: 20,
    margin: 10,
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#e9e9e9',
    color: 'darkGrey',
    outline: 'none',
  },
  warningText: {
    marginRight: 10,
    marginLeft: 10,
    color: '#e9e9e9',
    backgroundColor: '#ed5c5a',
    padding: 10,
    borderRadius: 10,
  },
};

export default SignIn;
