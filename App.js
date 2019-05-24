import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Player from './src/pages/Player';
import Home from './src/pages/Home'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Player: { screen: Player }
});

export default createAppContainer(AppNavigator);
