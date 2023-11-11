import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import axios from "axios";
import { useState, useEffect } from 'react';

export default function App() {
  const [FruitType, setFruitType] = useState('');
  return (
    <View style={styles.container}>
      <Text>Fruit API</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type your favorite fruit!"
        onChange={setFruitType()}
      />
      <Text>{returnFruit(FruitType)}</Text>
      <StatusBar style="auto" />
    </View>
  );
  	//"Endpoint" URL where the data is located
  

	// Set up the state to store the fetched data
	const [data, setData] = useState([])

	useEffect(() => {
		// const fetchData = async () => {
		// 	console.log("Making GET Request");
		// 	try {
		// 		// GET Request
		// 		const response = await axios.get(URL)
		// 				 .then((response) => {
		// 				console.log(response)
    //         setData(response.data)
    //          })
		// 		// Update the state with the fetched data
					
		// 	} catch (error) {
		// 		// Handle any errors
    //     console.error('Failed to fetch data: ', error);
		// 	}
		// }
		// fetchData()

    
	}, []);
  
  function returnFruit (FruitType){
    const URL = "https://www.fruityvice.com/api/fruit/" + FruitType

    const response = axios.get(URL)
						 .then((response) => {
						console.log(response)
				})
    const data = response.data
    const nutri = data["nutrition"]
    console.log(nutri)
    return nutri
  }
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
