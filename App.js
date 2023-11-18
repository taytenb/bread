import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import axios from "axios";
import { useState, useEffect } from 'react';
const API_SERVER_URL = 'https://www.fruityvice.com/api/fruit/'; 
const App = () => {
  const [FruitType, setFruitType] = useState('');
  const renderItem = ({ item }) => (
    <Text name={item.name} />
  );
  const handleGenerateAPI = async () => {
    if (!FruitType) {
      Alert.alert('Error', 'Please enter a valid input.');
      return;
    }

    try {
      const response = await axios.get(API_SERVER_URL+FruitType);
      console.log(response.data);
      setFruitType(response.data);
      Alert.alert('Success', 'API generated successfully.');

    } catch (error) {
      console.error('Error generating API:', error.message);
      Alert.alert('Error', 'Failed to generate API.');
    }
  };
  
  console.log(FruitType)
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Expo API Generator</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
            width: 200,
          }}
          placeholder="Type your favorite fruit!"
          onChangeText={(text) => setFruitType(text)}
          value={FruitType}
        />
        
        <Button title="Generate API" onPress={handleGenerateAPI} />
        
        
        <FlatList
          data={FruitType}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={renderItem}
        />
      </View>
    );
  
  	//"Endpoint" URL where the data is located
  


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'red',

  }
});
export default App;