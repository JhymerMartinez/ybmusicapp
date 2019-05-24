
import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const apiKey = 'AIzaSyBQQJEp3x4ch3HUVWZHxCkh_DUOFO-K6ak';
const channelId = 'PLGqEuVZwqpQklsEf9B_LkWMxhwtu3';
const results = 30;

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&playlistId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
      .then(res => res.json())
      .then((res) => {
        const videoId = [];

        res.items.forEach((item) => {
          videoId.push(item);
        });
        this.setState({
          data: videoId
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {data.map(item =>
              <TouchableHighlight
                key={item.id.videoId}
                onPress={() => this.props.navigation.navigate('Player', { videoId: item.id.videoId })}>
                <View style={styles.vids}>
                  <Image
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                    style={{ width: 320, height: 180 }}>
                  </Image>
                </View>
              </TouchableHighlight>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    //padding: 30
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#000'
  }
});
