
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
      <MusicPlayer src="https://r3---sn-oxuu2a0n-avie.googlevideo.com/videoplayback?id=o-AOOrHDKYNCJbyQmSIehhZVlFKxADTAx_Pmg9XvRse5bc&itag=140&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-oxuu2a0n-avie%2Csn-hp57kn7s&ms=au%2Crdu&mv=m&pl=24&ei=yHjnXLqgDJCt4QSeubjIDw&initcwndbps=218750&mime=audio%2Fmp4&gir=yes&clen=46116462&dur=2849.483&lmt=1544350679874906&mt=1558673462&fvip=3&keepalive=yes&c=WEB&txp=5532432&ip=190.96.99.19&ipbits=0&expire=1558695208&sparams=ip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cei%2Cinitcwndbps%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&key=yt8&signature=DD2DBBA290E2ECC9E68D657A5272BDF5B9B527DD.EC294E9407F4A59D1D3EEDC57DF7ED05C015DB6C&ratebypass=yes"></MusicPlayer>
    )
  }
}
