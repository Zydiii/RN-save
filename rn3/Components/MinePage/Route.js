import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Header, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class Route extends React.Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        //            this.animation.play(30, 120);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{ flex: 1 }}
                        source={require('../../app/animations/2523-loading')}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 100 }}>
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Cochin' }}>
                        敬请期待...
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