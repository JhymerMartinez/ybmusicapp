
import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

const apiKey = 'AIzaSyBQQJEp3x4ch3HUVWZHxCkh_DUOFO-K6ak';
const channelId = 'UClZuKq2m0Qu-HkopkSBLpEw';
const results = 30;

export default class Home extends Component {

  ds = null

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&part=snippet&order=rating&maxResults=${results}&videoCategoryId=10&type=video`
    fetch(url)
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
          {!data
          ? <Text>Loading...</Text>
          : <FlatList
              data={data}
              renderItem={({item}) => {
                return(
                  <View style={styles.row}>
                    <Text numberOfLines={1}>{item.snippet.title}</Text>
                  </View>
                )
              }}
            />}
            {/* {data.map(item =>
              <TouchableHighlight
                key={item.id.videoId}
                onPress={() => this.props.navigation.navigate('Player', { videoId: item.id.videoId })}>
                <Text>{item.snippet.title}</Text>
              </TouchableHighlight>
            )} */}
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
    alignItems: 'center',
    //padding: 30
  },
  vids: {
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  vidText: {
    padding: 20,
    color: '#000'
  },
  row: {
   margin: 10,
  },
  title: {
    flex: 1
  }
});
