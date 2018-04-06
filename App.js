//android.js

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import AlbumDetails from './src/components/AlbumDetails'

export default class App extends React.Component {
  render() {
    return (
      <View  style={{flex : 1}}>    
        <Header headerText={'Swifty Papa'}/>
        <AlbumList/>
      </View>
    );
  }
}

class Sample extends Component  {
    render (){
        return (<Text> This is Sample class</Text>);
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
