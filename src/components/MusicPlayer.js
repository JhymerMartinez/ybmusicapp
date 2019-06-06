import React, { Component } from 'react';
import {
  Player,
} from 'react-native-audio-toolkit';

import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class MusicPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  componentDidMount() {

    const {videoId} = this.props;

    fetch(`http://192.168.201.97:7777/api/get_video_stream_url/${videoId}`)
      .then(response => response.json())
      .then((responseJson)=> {

        const player = new Player(responseJson.url)

        this.setState({
          player
        });
      })
      .catch(error=>{
      })


  }

  onPlay() {
    const {player} = this.state;

    if (player) {
      player.play()
    }

  }

  onPause() {
    const {player} = this.state;

    if (player) {
      player.pause()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around' }}>
          <Button
            title='Play'
            onPress={() => this.onPlay()}
            color='red'
          />
          <Button
            title='Pause'
            onPress={() => this.onPause()}
            color='red'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
