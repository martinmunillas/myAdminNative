import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const CreateUser = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    console.log(form);
  };
  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder='Name'
        style={styles.input}
        onChangeText={(value) => handleChange('name', value)}
      />

      <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={(value) => handleChange('email', value)}
      />

      <TextInput
        placeholder='Phone'
        style={styles.input}
        onChangeText={(value) => handleChange('phone', value)}
      />

      <Button title='Save' onPress={handleSubmit} />
      <Button title='Go Home' onPress={() => props.navigation.navigate('home')} />
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    margin: '10px',
  },
  input: {
    padding: 20,
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#1f1f1f',
    color: 'white',
    outline: 'none',
  },
};

export default CreateUser;
