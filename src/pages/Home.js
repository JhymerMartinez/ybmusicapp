
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const apiKey = 'AIzaSyBQQJEp3x4ch3HUVWZHxCkh_DUOFO-K6ak';
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

  _keyExtractor = (item, index) => item.id.videoId;

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
          {!data
          ? <Text style={styles.loading}>Loading...</Text>
          : <FlatList
              data={data}
              keyExtractor={this._keyExtractor}
              renderItem={({item, index}) => {
                return(
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Player', { videoId: item.id.videoId })}>
                    <View style={styles.row}>
                      <Icon name="play-circle" size={30} style={styles.icon} color="#3A506B" />
                      <Text numberOfLines={1} style={styles.itemTitle}>{item.snippet.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />}
          </View>
        </ScrollView>
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
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0B132B'
  },
  row: {
   margin: 10,
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center'
  },
  title: {
    flex: 1
  },
  itemTitle: {
    color: '#6FFFE9'
  },
  loading: {
    color: '#6FFFE9'
  },
  icon: {
    marginRight: 10
  }
});
