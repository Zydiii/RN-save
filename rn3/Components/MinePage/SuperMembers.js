import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity, Linking } from 'react-native';
import { Avatar, Divider, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

//表示是否是vip的变量
var isVIP = 1;
var username = 'Arwen';
var date = '2019-10-11';

const onButtonPress = async () => {
  console.log('超级会员');
  // try {
  //   const id = await AsyncStorage.getItem('id');
  //   if (id !== null) {
  //     // We have data!!
  //     console.log(id);
  //   }
  // } catch (error) {
  //   console.log('error');
  // }  
  const userToken = await AsyncStorage.getItem('userToken', '');
  const id = await AsyncStorage.getItem('id')
  const username = await AsyncStorage.getItem('username')
  console.log('getID')
  console.log(id)
  let url = 'http://47.95.253.250:8080/alipay/wappay/pay.jsp?guid=' + id;

  Linking.addEventListener('url', this._handleOpenURL);
  Linking.openURL(url);

  // this.timer = setInterval(() => {
  //   console.log("把一个定时器的引用挂在this上");
  //   let url = 'http://202.120.40.8:30454/users/users/username/' + username;
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Bearer ' + userToken);
  //   return fetch(url, {
  //     method: 'GET',
  //     headers: headers,
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to Log in')
  //       }
  //       console.log(response)
  //       return response.json()

  //     })
  //     .then(jsons => {
  //       console.log(jsons.id)
  //       AsyncStorage.setItem('vipdate', jsons.vipdate).then(() => {
  //         setTimeout(() => {
  //         }, 1000)
  //       });
  //       AsyncStorage.setItem('vip', jsons.vip).then(() => {
  //         setTimeout(() => {
  //         }, 1000)

  //       })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //     })
  // }, 3000)
}

//会员的的界面
export default class SuperMembers extends React.Component {

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
      if (this.state.isVIP == 0) {
        name = '普通会员'
      }
      else {
        name = '超级会员'
      }
      console.log(name)
      this.setState({
        display: name
      })
    })
  };

  render() {
    return (
      <ScrollView>
        <Card
          style={{ backgroundColor: '#dae9f4' }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10 }}>
            <Avatar
              width={60}
              height={60}
              source={{
                uri: 'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
              }}
              activeOpacity={0.7}
              avatarStyle={{ borderRadius: 145 / 2 }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
            <View>
              <Text style={{ fontSize: 20, color: '#333030' }}>{this.state.username}</Text>
              <Text style={{ fontSize: 14, color: '#333030' }}>超级会员：{this.state.date}</Text>
            </View>
            <View>
              <Image source={require('./Assets/MinePage/QQ20190726-0.jpg')} style={{ width: 60, height: 60 }}></Image>
            </View>
          </View>
        </Card>
        <Card
          title='我的会员特权'
        >
          <ScrollView horizontal={true}>
            <View style={{ width: 140, }}>
              <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                <Avatar
                  width={40}
                  height={40}
                  source={require('./Assets/MinePage/landmarksphinx.png')}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: '#f9a11b' }}>景点识别</Text>
                </View>

              </View>
              <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>千万景点快速识别</Text>
            </View>

            <View style={{ width: 140, }}>
              <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                <Avatar
                  width={40}
                  height={40}
                  source={require('./Assets/MinePage/yuyin.png')}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: '#f9a11b' }}>语音翻译</Text>
                </View>

              </View>
              <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>多语种语音翻译</Text>
            </View>
            <View style={{ width: 140, }}>
              <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                <Avatar
                  width={40}
                  height={40}
                  source={require('./Assets/MinePage/weibiaoti556.png')}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: '#f9a11b' }}>文字翻译</Text>
                </View>

              </View>
              <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>上传图片自动翻译</Text>
            </View>
            <View style={{ width: 140, }}>
              <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                <Avatar
                  width={40}
                  height={40}
                  source={require('./Assets/MinePage/ad.png')}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: '#f9a11b' }}>广告特权</Text>
                </View>

              </View>
              <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>自动隐藏广告</Text>
            </View>
            <View style={{ width: 140, }}>
              <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                <Avatar
                  width={40}
                  height={40}
                  source={require('./Assets/MinePage/zhuanjiafudao.png')}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
                <View>
                  <Text style={{ fontSize: 16, color: '#f9a11b' }}>专家翻译</Text>
                </View>

              </View>
              <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>专家翻译准确率更高</Text>
            </View>
          </ScrollView>

        </Card>
        <View style={{ marginTop: 20 }}>
          <PricingCard
            color="#4f9deb"
            title="续费会员"
            price="¥12"
            info={['1个月', '所有功能特权']}
            button={{ title: '立即续费' }}
            onButtonPress={onButtonPress}
          />
        </View>
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