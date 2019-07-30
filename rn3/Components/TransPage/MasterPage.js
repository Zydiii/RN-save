import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Alert,
    Dimensions,
    Button,
    Platform,
    Image,
    StatusBar,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import ActionButton from 'react-native-action-button';
// import Icon1 from 'react-native-vector-icons/Ionicons';
import JMessage from 'jmessage-react-plugin';
import { SearchBar, Header, Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer, DrawerActions } from "react-navigation";

var RNFS = require('react-native-fs')
var forge = require('node-forge');

var ReactNative = require('react-native')
import IMUI from 'aurora-imui-react-native'
var InputView = IMUI.ChatInput
var MessageListView = IMUI.MessageList
const AuroraIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')

var themsgid = 1

function constructNormalMessage() {

    var message = {}
    message.msgId = themsgid.toString()
    themsgid += 1
    message.status = "send_succeed"
    message.isOutgoing = true
    var date = new Date()
    message.timeString = date.getHours() + ":" + date.getMinutes()
    var user = {
        userId: "didi",
        displayName: "didi",
        avatarPath: "http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG"
    }
    // if (Platform.OS === "ios") {
    //     user.avatarPath = RNFS.MainBundlePath + '/default_header.png'
    // }
    message.fromUser = user

    return message
}

var imageUrlArray = [
    //        "https://www.lsc-online.com/wp-content/uploads/2017/05/bigstock-151229657.jpg"
    //        "https://www.iconspng.com/images/coniglio-rabbit-small/coniglio-rabbit-small.jpg",
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534943746996&di=ad157c6f6cf0559b272718793c5af048&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1206%2F21%2Fc2%2F12078509_12078509_1340246370201.jpg"
]

class CustomVew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64Image: ''
        };
    }
    render() {
        return (<img src={`${RNFS.MainBundlePath}/default_header.png`}></img>)
    }
}

export default class TestRNIMUI extends Component {
    // static navigationOptions = {
    //     tabBarVisible: false,
    //     tabBarLabel: '翻译',
    //     headerTitle: 'Second',
    //     tabBarIcon: ({ tintColor }) => (
    //         <Image
    //             source={require('../Assets/TransPage/trans_icon.png')}
    //             style={[styles.icon, { tintColor: tintColor }]}
    //         />
    //     ),
    // };

    constructor(props) {
        super(props);
        let initHeight;
        if (Platform.OS === "ios") {
            initHeight = 46
        } else {
            initHeight = 50
        }
        this.state = {
            inputLayoutHeight: initHeight,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { width: window.width, height: initHeight, },
            isAllowPullToRefresh: true,
            navigationBar: {},
        }


        this.updateLayout = this.updateLayout.bind(this);
        this.onMsgClick = this.onMsgClick.bind(this);
        this.messageListDidLoadEvent = this.messageListDidLoadEvent.bind(this);

        JMessage.init({
            appkey: "6a8022404564c09c1622da33",
            isOpenMessageRoaming: false, // 是否开启消息漫游，默认不开启
            isProduction: true, // 是否为生产模式
        })

        //登录
        JMessage.login({
            username: "zydiii",
            password: "123456"
        }, () => { alert("登陆成功") }, (error) => {/*登录失败回调*/ })

        var listener = (messages) => {
            // 收到的消息会返回一个消息对象. 对象字段可以参考对象说明
            // console.log(messages.text)
            var message = constructNormalMessage()
            message.msgType = "custom"
            message.msgId = "10"
            message.status = "send_going"
            message.isOutgoing = false
            message.content = messages.text
            // message.contentSize = { 'height': 100, 'width': 200 }
            message.extras = { "extras": "fdfsf" }
            var user = {
                userId: "",
                displayName: "",
                avatarPath: ""
            }
            user.displayName = ""
            user.avatarPath = "http://pv18mucav.bkt.clouddn.com/Qs.Picture.view.png"
            message.fromUser = user
            AuroraIController.appendMessages([message]);
        }

        JMessage.addReceiveMessageListener(listener) // 添加监听

        // JMessage.getHistoryMessages({
        //     type: 'single', username: 'zydiii',
        //     appKey: '6a8022404564c09c1622da33', from: 0, limit: 10
        // },
        //     (msgArr) => { // 以参数形式返回消息对象数组
        //         // do something.
        //         console.log(msgArr)

        //     }, (error) => {
        //         var code = error.code
        //         var desc = error.description
        //     })


        // JMessage.sendTextMessage({
        //     type: 'single', username: 'test', appKey: '6a8022404564c09c1622da33',
        //     text: 'hello world', extras: { key1: 'value1' }, messageSendingOptions: JMessage.messageSendingOptions
        // },
        //     (msg) => {
        //         // do something.
        //         alert('send')

        //     }, (error) => {
        //         var code = error.code
        //         var desc = error.description
        //     })



    }

    componentDidMount() {
        /**
         * Android only
         * Must set menu height once, the height should be equals with the soft keyboard height so that the widget won't flash.
         * 在别的界面计算一次软键盘的高度，然后初始化一次菜单栏高度，如果用户唤起了软键盘，则之后会自动计算高度。
         */
        if (Platform.OS === "android") {
            this.refs["ChatInput"].setMenuContainerHeight(316)
        }
        this.resetMenu()
        AuroraIController.addMessageListDidLoadListener(this.messageListDidLoadEvent);
    }

    messageListDidLoadEvent() {
        this.getHistoryMessage()
    }

    getHistoryMessage() {
        var messages = []
        for (var index in imageUrlArray) {
            var message = constructNormalMessage()
            message.fromUser.avatarUrl = "http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG",//1
                message.msgType = 'image'
            message.mediaPath = imageUrlArray[index]
            message.contentSize = { 'height': 100, 'width': 200 }
            message.extras = { "extras": "fdfsf" }
            messages.push(message)
            // AuroraIController.appendMessages([message])
            // AuroraIController.scrollToBottom(true)
        }
        AuroraIController.appendMessages(messages)
        AuroraIController.scrollToBottom(true)
    }

    onInputViewSizeChange = (size) => {
        console.log("onInputViewSizeChange height: " + size.height + " width: " + size.width)
        if (this.state.inputLayoutHeight != size.height) {
            this.setState({
                inputLayoutHeight: size.height,
                inputViewLayout: { width: window.width, height: size.height },
                messageListLayout: { flex: 1, width: window.width, margin: 0 }
            })
        }
    }

    componentWillUnmount() {
        AuroraIController.removeMessageListDidLoadListener(this.messageListDidLoadEvent)
    }

    resetMenu() {
        if (Platform.OS === "android") {
            this.refs["ChatInput"].showMenu(false)
            this.setState({
                messageListLayout: { flex: 1, width: window.width, margin: 0 },
                navigationBar: { height: 64, justifyContent: 'center' },
            })
            this.forceUpdate();
        } else {
            AuroraIController.hidenFeatureView(true)
        }
    }

    /**
     * Android need this event to invoke onSizeChanged 
     */
    onTouchEditText = () => {
        this.refs["ChatInput"].showMenu(false)
    }

    onFullScreen = () => {
        console.log("on full screen")
        this.setState({
            messageListLayout: { flex: 0, width: 0, height: 0 },
            inputViewLayout: { flex: 1, width: window.width, height: window.height },
            navigationBar: { height: 0 }
        })
    }

    onRecoverScreen = () => {
        // this.setState({
        //   inputLayoutHeight: 100,
        //   messageListLayout: { flex: 1, width: window.width, margin: 0 },
        //   inputViewLayout: { flex: 0, width: window.width, height: 100 },
        //   navigationBar: { height: 64, justifyContent: 'center' }
        // })
    }

    onAvatarClick = (message) => {
        // Alert.alert("删除消息")
        // AuroraIController.removeMessage(message.msgId)
    }

    onMsgClick(message) {
        // console.log(message)
        // Alert.alert("message", JSON.stringify(message))
    }

    onMsgLongClick = (message) => {
        // Alert.alert('message bubble on long press', 'message bubble on long press')
    }

    onStatusViewClick = (message) => {
        // message.status = 'send_succeed'
        // AuroraIController.updateMessage(message)
    }

    onBeginDragMessageList = () => {
        this.resetMenu()
        AuroraIController.hidenFeatureView(true)
    }

    onTouchMsgList = () => {
        AuroraIController.hidenFeatureView(true)
    }

    onPullToRefresh = () => {
        console.log("on pull to refresh")
        var messages = []
        // for (var i = 0; i < 3; i++) {
        //     var message = constructNormalMessage()
        //     // if (index%2 == 0) {
        //     message.msgType = "text"
        //     message.text = "" + i
        //     // }

        //     if (i % 3 == 0) {
        //         message.msgType = "video"
        //         message.text = "" + i
        //         message.mediaPath = "/storage/emulated/0/ScreenRecorder/screenrecorder.20180323101705.mp4"
        //         message.duration = 12
        //     }
        //     messages.push(message)
        // }
        AuroraIController.insertMessagesToTop(messages)
        if (Platform.OS === 'android') {
            this.refs["MessageList"].refreshComplete()
        }

    }

    onSendText = (text) => {
        var message = constructNormalMessage()
        var evenmessage = constructNormalMessage()

        message.msgType = 'text'
        message.text = text

        AuroraIController.appendMessages([message])

    }

    onTakePicture = (media) => {
        console.log("media " + JSON.stringify(media))
        var message = constructNormalMessage()
        message.msgType = 'image'
        message.mediaPath = media.mediaPath
        AuroraIController.appendMessages([message])
        this.resetMenu()
        AuroraIController.scrollToBottom(true)
    }

    onStartRecordVoice = (e) => {
        console.log("on start record voice")
    }

    onFinishRecordVoice = (mediaPath, duration) => {
        var message = constructNormalMessage()
        message.msgType = "voice"
        message.mediaPath = mediaPath
        message.duration = duration
        AuroraIController.appendMessages([message])
        console.log("on finish record voice")
    }

    
    onCancelRecordVoice = () => {
        console.log("on cancel record voice")
    }

    onStartRecordVideo = () => {
        console.log("on start record video")
    }

    onFinishRecordVideo = (video) => {
        // var message = constructNormalMessage()

        // message.msgType = "video"
        // message.mediaPath = video.mediaPath
        // message.duration = video.duration
        // AuroraIController.appendMessages([message])
    }

    onSendGalleryFiles = (mediaFiles) => {
        /**
         * WARN: This callback will return original image, 
         * if insert it directly will high memory usage and blocking UI。
         * You should crop the picture before insert to messageList。
         * 
         * WARN: 这里返回的是原图，直接插入大会话列表会很大且耗内存.
         * 应该做裁剪操作后再插入到 messageListView 中，
         * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
         * 
         * 代码用例不做裁剪操作。
         */
        // Alert.alert('fas', JSON.stringify(mediaFiles))
        for (index in mediaFiles) {
            var message = constructNormalMessage()
            if (mediaFiles[index].mediaType == "image") {
                message.msgType = "image"
            } else {
                message.msgType = "video"
                message.duration = mediaFiles[index].duration
            }

            message.mediaPath = mediaFiles[index].mediaPath
            message.timeString = ""
            message.status = "send_succeed"
            AuroraIController.appendMessages([message])
            AuroraIController.scrollToBottom(true)
        }

        this.resetMenu()
    }

    onSwitchToMicrophoneMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToEmojiMode = () => {
        AuroraIController.scrollToBottom(true)
    }
    onSwitchToGalleryMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToCameraMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onShowKeyboard = (keyboard_height) => {
    }

    updateLayout(layout) {
        this.setState({ inputViewLayout: layout })
    }

    onInitPress() {
        console.log('on click init push ');
        this.updateAction();
    }

    onClickSelectAlbum = () => {
        console.log("on click select album")
    }

    onCloseCamera = () => {
        console.log("On close camera event")
        this.setState({
            inputLayoutHeight: 100,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { flex: 0, width: window.width, height: 100 },
            navigationBar: { height: 64, justifyContent: 'center' }
        })
    }

    /**
     * Switch to record video mode or not
     */
    switchCameraMode = (isRecordVideoMode) => {
        console.log("Switching camera mode: isRecordVideoMode: " + isRecordVideoMode)
        // If record video mode, then set to full screen.
        if (isRecordVideoMode) {
            this.setState({
                messageListLayout: { flex: 0, width: 0, height: 0 },
                inputViewLayout: { flex: 1, width: window.width, height: window.height },
                navigationBar: { height: 0 }
            })
        }
    }

    render() {
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
                    leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon
                            name='menu'
                            color='#ffffff' />
                    </TouchableOpacity>}
                    // centerComponent={<MyCustomCenterComponent />}
                    rightComponent={<TouchableOpacity onPress={() => this.props.navigation.navigate('GPS')}>
                        <Icon
                            name='location'
                            type='evilicon'
                            size={30}
                            color='#ffffff' />
                    </TouchableOpacity>}
                />
                <MessageListView style={this.state.messageListLayout}
                    ref="MessageList"
                    isAllowPullToRefresh={true}
                    onAvatarClick={this.onAvatarClick}
                    onMsgClick={this.onMsgClick}
                    onStatusViewClick={this.onStatusViewClick}
                    onTouchMsgList={this.onTouchMsgList}
                    onTapMessageCell={this.onTapMessageCell}
                    onBeginDragMessageList={this.onBeginDragMessageList}
                    onPullToRefresh={this.onPullToRefresh}
                    avatarSize={{ width: 30, height: 30 }}
                    avatarCornerRadius={25}
                    messageListBackgroundColor={"#f3f3f3"}
                    sendBubbleTextSize={15}
                    sendBubbleTextColor={"#000000"}
                    sendBubblePadding={{ left: 10, top: 2, right: 15, bottom: 2 }}
                    receiveBubbleTextSize={15}
                    datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}
                    dateBackgroundColor={"#F3F3F3"}
                    dateTextColor="#000000"
                    photoMessageRadius={5}
                    maxBubbleWidth={0.7}
                    videoDurationTextColor={"#ffffff"}
                />
                <InputView style={this.state.inputViewLayout}
                    ref="ChatInput"
                    onSendText={this.onSendText}
                    onTakePicture={this.onTakePicture}
                    onStartRecordVoice={this.onStartRecordVoice}
                    onFinishRecordVoice={this.onFinishRecordVoice}
                    onCancelRecordVoice={this.onCancelRecordVoice}
                    onStartRecordVideo={this.onStartRecordVideo}
                    onFinishRecordVideo={this.onFinishRecordVideo}
                    onSendGalleryFiles={this.onSendGalleryFiles}
                    onSwitchToEmojiMode={this.onSwitchToEmojiMode}
                    onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
                    onSwitchToGalleryMode={this.onSwitchToGalleryMode}
                    onSwitchToCameraMode={this.onSwitchToCameraMode}
                    onShowKeyboard={this.onShowKeyboard}
                    onTouchEditText={this.onTouchEditText}
                    onFullScreen={this.onFullScreen}
                    onRecoverScreen={this.onRecoverScreen}
                    onSizeChange={this.onInputViewSizeChange}
                    closeCamera={this.onCloseCamera}
                    switchCameraMode={this.switchCameraMode}
                    showSelectAlbumBtn={true}
                    showRecordVideoBtn={false}
                    onClickSelectAlbum={this.onClickSelectAlbum}
                    inputPadding={{ left: 8, top: 0, right: 8, bottom: 0 }}
                    inputTextSize={15}
                    galleryScale={0.5}//default = 0.5
                    compressionQuality={0.6}
                    cameraQuality={0.5}//default = 0.5
                    customLayoutItems={{
                        left: [''],
                        right: ['send'],
                        bottom: ['gallery', 'camera', 'voice']
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sendCustomBtn: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputView: {
        backgroundColor: 'green',
        width: window.width,
        height: 100,
    },
    btnStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#3e83d7',
        borderRadius: 8,
        backgroundColor: '#3e83d7'
    },
    icon: {
        width: 26,
        height: 26,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    }
});