import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useData } from '../useData';
import { useNavigation } from '@react-navigation/native';


function Activity1Screen() {
  const [data, error, fetchData] = useData('GET');

  const handleButtonClick = () => {
    fetchData('/api/users');
  };

  navigation = useNavigation()


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Get the Value of the Smart Contract</Text>
      <Button title="Get Value" onPress={handleButtonClick} />
      {data && (
        <View style={{ paddingTop: 6 }}>
          <Text>{data} ETH</Text>
        </View>
      )}
      {error && (
        <View style={{ paddingTop: 6 }}>
          <Text>Error with server communication</Text>
        </View>
      )}
      <View style={{ paddingTop: 6 }}>
        <Button
          title="Back to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default Activity1Screen;
