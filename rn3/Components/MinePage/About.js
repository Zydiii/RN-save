import React, {Fragment, Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
//表示是否是vip的变量
var isVIP = 1;
var username = 'Arwen';
var date = '2019-10-11';

export  default class About extends React.Component {
    componentDidMount() {
            this.animation.play();
            // Or set a specific startFrame and endFrame with:
//            this.animation.play(30, 120);
          }

        render() {
         return (
         <View style={{flex:1}}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                             <LottieView
                             ref={animation => {
                               this.animation = animation;
                             }}
                             style={{flex: 1}}
                             source={require('../../app/animations/about.json')}
                             />
                 </View>
                 <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 100}}>
                        <Text
                        style={{fontSize: 20, fontWeight:'bold', fontFamily:'Cochin'}}>
                        不知道这个页面要放什么...
                        </Text>
                 </View>
              </View>

             )
        }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8e8e8',
  },
  icon: {
      width: 24,
      height: 24,
  },
  scrollStyle: {
      marginTop: 0,
  },
  sectionStyle: {
      marginTop: 20,
  },
});

const cellStyle = StyleSheet.create({
  containerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,.3)',
      height: 44,
      width: screenWidth,
      borderBottomColor: '#e8e8e8',
      borderBottomWidth: 0.5,
  },
  leftViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
  },
  leftIconStyle: {
      width: 24,
      height: 24,
      marginRight: 5,
  },
  leftTitleStyle: {
      color: '#3E4348',
      fontSize: 15
  },
  rightViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  rightIconStyle: {
      width: 24,
      height: 24,
  },
  newStyle: {
      // width: 30,
      // height: 24,
      borderRadius: 18,
      backgroundColor: 'red',
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 1,
      paddingBottom: 1,
  }
});