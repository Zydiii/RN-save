import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import { createStackNavigator, createAppContainer, DrawerActions } from 'react-navigation';
import ThirdScreen from "./ThirdScreen";
import TabMainScreen from "./TabMainScreen";
import MainPage from "../MainPage/Main"
import DetailScreen from "../CameraPage/DetailScreen"
import NothinScreen from "../CameraPage/NothingScreen"
import UserPage from "../MinePage/Mine"
import ChangeLang from "../TransPage/ChangeLang"
import GPS from "../GPSPage/GPS"
import MasterPage from "../TransPage/MasterPage"
import Shop from "../GPSPage/Shop"
import Food from "../GPSPage/Food"
import Hotel from "../GPSPage/Hotel"
import DetailsScreen from "../MinePage/DetaisScreen"
import About from "../MinePage/About"
import Route from "../MinePage/Route"
import WalletScreen from "../MinePage/WalletScreen"
import NotSupperMembers from "../MinePage/NotSupperMembers"
import SuperMenmbers from "../MinePage/SuperMembers"
import Room from "../MinePage/Room"

const MyStackNavigation = createStackNavigator({
    Main: {
        screen: TabMainScreen,
        navigationOptions: ({ navigation }) => ({
            // headerTitleStyle: {
            //     alignSelf: 'center',
            // },
            header: null
            // headerLeft: (
            //     // <Button
            //     //     title='Menu'
            //     //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            //     // />
            //     <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            //         <Image
            //             source={require('../Assets/NavigationPage/menu_icon.png')}
            //             style={{ width: 30, height: 30 }}
            //         />
            //     </TouchableOpacity>
            // ),
        }),
    },
    // Main: {
    //     screen: TabMainScreen,
    //     navigationOptions:({ navigation }) => ({
    //         headerTitleStyle:{
    //             alignSelf:'center',
    //         },
    //         headerLeft: (
    //             <Button
    //                 title='Menu'
    //                 onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    //             />
    //         ),
    //     }),
    // },
    Third: {
        screen: ThirdScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <Button
                    title='Menu'
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
        }),
    },

    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    GPS: {
        screen: GPS,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '定位服务',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    Route: {
        screen: Route,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    Room: {
        screen: Room,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    SuperMembers: {
        screen: SuperMenmbers,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    NotSuperMembers: {
        screen: NotSupperMembers,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    Wallet: {
        screen: WalletScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },


    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    Details: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    UserPage: {
        screen: UserPage,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    NothingScreen: {
        screen: NothinScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    ChangeLang: {
        screen: ChangeLang,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '语种选择',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    MasterPage: {
        screen: MasterPage,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '专家翻译',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    ShopPage: {
        screen: Shop,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '购物中心',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    HotelPage: {
        screen: Hotel,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '附近酒店',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    FoodPage: {
        screen: Food,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            title: '周边美食',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },


});
export default createAppContainer(MyStackNavigation);