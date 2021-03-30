import React from 'react';
import { View, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bae_Suzy_at_%27Vagabond%27_show_party_in_Seoul_on_May_24%2C_2019.png'
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={pic} style={{
          width: 200,
          height: 200,
          borderRadius: 200 / 2,
          overflow: "hidden",
          borderWidth: 3,
          borderColor: "red"
        }} />
      </View>
    )
  }
}