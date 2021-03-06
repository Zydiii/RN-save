import { StyleSheet, Platform } from 'react-native'
var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  containerStyle3: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F1ED',
},
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sWidth,
    height: 45,
    borderBottomColor: '#F5F5F9',
    borderBottomWidth: 1,
  },
  leftStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  rightStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  icon: {
    width: 26,
    height: 26,
  },
  containerStyle1: {
    backgroundColor: '#F5F1ED',
  },
  listContainerStyle: {
    width: sWidth,
  },
  cellStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5F1ED',
    borderBottomWidth: 1,
    padding: 10,
  },
  cellImageStyle: {
    width: 100,
    height: 50,
  },
  cellRightStyle: {
    marginLeft: 10,
    alignItems: 'flex-start',
    marginRight: 5,
  },
  cellRightBottomStyle: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  mapStyle: {
    height: 420,
    backgroundColor: '#F5F5F9'
  },
  map: {
    flex: 1,
    ...Platform.select({
      ios: {
        // marginBottom: 72,
      },
    }),
  },
  controls: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    paddingLeft: 20,
    paddingRight: 20,
    ...Platform.select({
      android: {
        backgroundColor: '#F5F5F9',
      },
      ios: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopColor: '#e0e0e0',
        borderTopWidth: StyleSheet.hairlineWidth,
        zIndex: 1,
      },
    }),
  },
  control: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    marginTop: 5,
  },
  cellStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5F1ED',
    borderBottomWidth: 1,
    padding: 10,
  },
  cellImageStyle: {
    width: 100,
    height: 50,
  },
  cellRightStyle: {
    marginLeft: 10,
    alignItems: 'flex-start',
    marginRight: 5,
  },
  cellRightBottomStyle: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
})