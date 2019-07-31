
import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Header, Divider, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';
import { DrawerActions } from 'react-navigation';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
// //表示是否是vip的变量
// var isVIP = 1;
// var username = 'Arwen';
// var date = '2019-10-11';

export default class MainScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      isVIP: '',
      date: '',
      display: ''
    }
    this._retrieveData()
  }

  _retrieveData = async () => {
    const username = await AsyncStorage.getItem('username');
    const isVIP = await AsyncStorage.getItem('vip');
    console.log(isVIP)
    const date = await AsyncStorage.getItem('vipdate');
    this.setState({
      username: username,
      isVIP: isVIP,
      date: date
    }, () => {
      let name
      if(this.state.isVIP == 0){
        name = '普通会员'
      }
      else{
        name = '超级会员'
      }
      console.log(name)
      this.setState({
        display: name
      })
    })
  };

  render() {
    console.log(this.state.isVIP)
    console.log(this.state.display)
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
          containerStyle={{ backgroundColor: "black" }}
          placement="left"
          backgroundImage={{ uri: 'http://pv18mucav.bkt.clouddn.com/016%20Deep%20Blue.png' }}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
          leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.goBack()}>
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
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              width={110}
              height={110}
              source={{
                uri:
                  'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
              }}
              activeOpacity={0.7}
              avatarStyle={{ borderRadius: 145 / 2 }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop: 10,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'bold',
                  fontSize: 25,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15,
                }}
              >
                {this.state.username}
              </Text>
              <Text
                style={{
                  fontFamily: 'bold',
                  fontSize: 15,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15,
                  marginTop: 10,
                }}
              >
                {this.state.display}
              </Text>
            </View>
          </View>
        </View>


        <ScrollView contentContainerStyle={styles.scrollStyle}
          showsVerticalScrollIndicator={false}
          contentInset={{ top: -200 }}
          contentOffset={{ y: 200 }}
        >
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => (this.state.isVIP == 1) ? this.props.navigation.navigate('SuperMembers') : this.props.navigation.navigate('NotSuperMembers')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/vip.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>了解会员特权</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Route')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/travel.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>我的行程</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/wallet.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>我的会员</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Room')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/room.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>我的空间</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/setting.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>设置</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/about.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>关于我们</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this._signOutAsync()}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('../Assets/MinePage/out.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>退出登录</Text>
                </View>

              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', '');
    this.props.navigation.navigate('Auth');
  };

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