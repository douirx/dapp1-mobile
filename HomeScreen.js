import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {

 navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Dapp1</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <Button
          title="Total"
          onPress={() => navigation.navigate('Tot')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
