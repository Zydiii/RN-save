import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Header, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
//表示是否是vip的变量
var isVIP = 1;
var username = 'Arwen';
var date = '2019-10-11';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
          containerStyle={{ backgroundColor: "black" }}
          placement="left"
          backgroundImage={{ uri: 'http://pv18mucav.bkt.clouddn.com/016%20Deep%20Blue.png' }}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
          leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('UserPage')}>
            <Icon
              name='arrow-left'
              type='evilicon'
              size={30}
              color='#ffffff' />
          </TouchableOpacity>}
        // centerComponent={<MyCustomCenterComponent />}
        // rightComponent={<TouchableOpacity onPress={() => this.props.navigation.navigate('GPS')}>
        //   <Icon
        //     name='location'
        //     type='evilicon'
        //     size={30}
        //     color='#ffffff' />
        // </TouchableOpacity>}
        />
        <Text>Details Screen</Text>
      </View>
    );
  }
}