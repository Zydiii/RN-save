// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import { StyleSheet, Text, View, Button, Image, StatusBar, ScrollView, AsyncStorage } from 'react-native';
// import { Avatar, Divider } from 'react-native-elements';
// import CommonMyCell from './CommonMyCell'

// export default class Main extends React.Component {

//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* <Background imgSrouce={require('../Assets/MinePage/back.jpg')} /> */}
//                 <View style={{ alignItem: 'flex-start', marginTop: 20 }}>
//                     <Avatar
//                         rounded
//                         source={{
//                             uri:
//                                 'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
//                         }}
//                         onPress={() => alert("想更换头像？不准")}
//                         showEditButton
//                         size={120}

//                     />

//                 </View>

//                 <ScrollView contentContainerStyle={styles.scrollStyle}
//                     showsVerticalScrollIndicator={false}
//                     contentInset={{ top: -200 }}
//                     contentOffset={{ y: 200 }}
//                 >
//                     <View style={styles.sectionStyle}>
//                         <CommonMyCell
//                             leftIcon='travel'
//                             leftTitle='我的行程'
//                             rightTitle=''
//                             rightIcon=''
//                         >
//                         </CommonMyCell>
//                     </View>
//                     <View>
//                         <CommonMyCell
//                             leftIcon='wallet'
//                             leftTitle='我的钱包'
//                             rightTitle=''
//                             rightIcon=''
//                         >
//                         </CommonMyCell>
//                     </View>
//                     <View>
//                         <CommonMyCell
//                             leftIcon='room'
//                             leftTitle='我的空间'
//                             rightTitle=''
//                             rightIcon=''
//                         >
//                         </CommonMyCell>
//                     </View>
//                     <View>
//                         <CommonMyCell
//                             leftIcon='setting'
//                             leftTitle='设置'
//                             rightTitle=''
//                             rightIcon=''
//                         >
//                         </CommonMyCell>
//                     </View>
//                 </ScrollView>



//                 <Button title="注销账户" onPress={this._signOutAsync} />
//                 <StatusBar barStyle="default" />
//             </View>
//         );
//     }

//     _signOutAsync = async () => {
//         await AsyncStorage.setItem('userToken', '');
//         this.props.navigation.navigate('Auth');
//     };

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#e8e8e8',
//     },
//     icon: {
//         width: 24,
//         height: 24,
//     },
//     scrollStyle: {
//         marginTop: 0,
//     },
//     sectionStyle: {
//         marginTop: 20,
//     },
// });
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

export default class MainScreen extends React.Component {
    _retrieveData = async () => {
          try {
            const username = await AsyncStorage.getItem('username');
            const isVIP = await AsyncStorage.getItem('isVIP');
            const date = await AsyncStorage.getItem('date');
            if (username !== null) {
              // We have data!!
              console.log(value);
            }
          } catch (error) {
            console.log('error');
            console.log(username);
          }
        };
    
        render() {
        this._retrieveData();
        let display = isVIP ? '超级会员': '普通会员';
            return (
                <View style={styles.container}>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                                  <View
                                    style={{
                                      flex: 1,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Avatar
                                      width={120}
                                      height={120}
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
                                        {username}
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
                                         {display}
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
                            <TouchableOpacity onPress={() => isVIP?this.props.navigation.navigate('SuperMembers'):this.props.navigation.navigate('NotSuperMembers')}>
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
                        <View>
                           <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
                             <View style={cellStyle.containerStyle}>
                                 <View style={cellStyle.leftViewStyle}>
    
                                     <Image source={require('../Assets/MinePage/wallet.png')} style={cellStyle.leftIconStyle}></Image>
                                     <Text style={styles.leftTitleStyle}>我的会员</Text>
                                 </View>
                             </View>
                            </TouchableOpacity>
                        </View>
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