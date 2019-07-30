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

const comments = [
 {
    name: '长城',
    avatar: 'http://pic31.nipic.com/20130708/9129085_163421411000_2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna augue, pellentesque quis dolor quis, fermentum placerat ante. Curabitur in augue ultricies, tincidunt metus et, ultrices purus. Sed gravida neque velit, id tincidunt eros blandit eu. Maecenas aliquam turpis eget ex porttitor vestibulum. Aliquam luctus, purus at cursus pretium, diam velit sagittis diam, vitae molestie dolor nunc vitae ipsum. Ut ut pretium dolor, id volutpat magna. Etiam vehicula consectetur euismod. Mauris fringilla nisl sit amet turpis vehicula rutrum. Integer at mi mauris. Integer sed vulputate turpis.',
    rating: 4.4
 },
 {
     name: '八达岭熊乐园',
     avatar: 'https://img1.qunarzz.com/travel/poi/201303/13/aacf42f477597acdddb12cfb.jpg_480x360x95_add51828.jpg',
     content: 'Phasellus sagittis condimentum diam, vitae varius lacus mollis sed. Vivamus molestie est quis neque pellentesque, sed aliquet justo porttitor. Integer egestas nibh sed finibus imperdiet. Nulla orci libero, venenatis non tellus vel, hendrerit posuere sapien. Sed in quam nec enim blandit finibus. Donec lobortis euismod pellentesque. Mauris accumsan eros ut metus bibendum vulputate. Suspendisse elementum ullamcorper eros, lobortis elementum velit mollis id. Fusce metus ex, scelerisque ut elit at, aliquet blandit dui. Nunc lacinia, augue sit amet dictum interdum, nisl nisl convallis mi, et scelerisque turpis sem ut elit. Mauris maximus libero elementum ex pellentesque facilisis. Aliquam pulvinar feugiat mi, sed suscipit nisl dictum in. Proin convallis risus vitae efficitur faucibus. Nulla vestibulum, libero vitae semper ornare, nibh quam vulputate ex, vitae laoreet nibh risus nec eros. Donec venenatis, nisl eget interdum semper, mauris nunc tincidunt eros, id lacinia mi ipsum vitae est. Fusce lobortis turpis nec cursus rutrum.',
     rating: 4.9
 },
]


//我的空间 写死的
export default class Room extends React.Component {
    render (){
        return(
        <ScrollView>

                <Card title="我的评论">
                  {
                    comments.map((u, i) => {
                      return (
                      <View>
                        <View key={i} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10}}>
                          <Avatar
                            width={60}
                            height={60}
                            source={{
                              uri: u.avatar,
                            }}
                            activeOpacity={0.7}
                            avatarStyle={{ borderRadius: 145 / 2 }}
                            overlayContainerStyle={{ backgroundColor: 'transparent' }}
                          />
                          <Text>{u.name}</Text>
                          <Rating
                            imageSize={20}
                            readonly
                            startingValue={u.rating}
                          />
                      </View>
                      <Text style={{alignItems: 'center', marginLeft: 10}}>{u.content}</Text>
                    </View>

                      );
                    })
                  }
                </Card>
        </ScrollView>

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