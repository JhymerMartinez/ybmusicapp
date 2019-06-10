import React, { Component } from 'react';
import {
  Player,
} from 'react-native-audio-toolkit';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class MusicPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  componentDidMount() {

    const { videoId } = this.props;
    fetch(`http://192.168.201.112:7777/api/get_video_stream_url/${videoId}`)
      .then(response => response.json())
      .then((responseJson) => {


        const player = new Player(responseJson.url)

        this.setState({
          player
        });
      })
      .catch(error => {

      })


  }

  _onPlay() {
    const { player } = this.state;

    if (player) {
      player.play()
    }

  }

  _onPause() {
    const { player } = this.state;

    if (player) {
      player.pause()
    }
  }

  render() {
    const { player } = this.state;
    return (
      <View style={styles.container}>
        {!player ? <Text style={styles.loading}>Loading...</Text>
          : <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => this._onPlay()}>
              <Icon
                name="play-circle"
                color="#3A506B"
                size={70}>
              </Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._onPause()}>
              <Icon
                name="pause-circle"
                color="#3A506B"
                size={70}>
              </Icon>
            </TouchableOpacity>
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B132B'
  },
  loading: {
    color: '#6FFFE9'
  }
});
