
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import MusicPlayer from '../components/MusicPlayer';

export default class Player extends Component {

  static navigationOptions = {
    headerTitle: '',
    headerStyle: {
      backgroundColor: '#000'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }

  render() {
    const videoId = this.props.navigation.state.params.videoId
    return (
      <MusicPlayer videoId={videoId}></MusicPlayer>
    )
  }
}
