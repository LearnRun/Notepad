import React from 'react'
import { StyleSheet, Modal, View, Text, TouchableOpacity, Image } from 'react-native'
import { PropTypes } from "prop-types"

const CustomAlertComponent = (props) => {

  const onNegativeButtonPress = () => {
    props.onPressNegativeButton()
  }

  const onPositiveButtonPress = () => {
    props.onPressPositiveButton()
  }

    return (
      <Modal
        visible={props.displayAlert}
        transparent={true}
        animationType={"slide"}
        visible={props.exitAlarmOnOffFlag}>
        <View style={styles.mainOuterComponent}>
          <View style={styles.mainContainer}>
            {/* First ROw - Alert Icon and Title */}
            <View style={styles.topPart}>
              {
                props.displayAlertIcon
                &&
                <Image
                  source={require('../../images/ic_stat_save.png')}
                  resizeMode={'contain'}
                  style={styles.alertIconStyle}
                />
              }
              <Text style={styles.alertTitleTextStyle}>
                {`${props.alertTitleText}`}
              </Text>
            </View>
            {/* Second Row - Alert Message Text */}
            <View style={styles.middlePart}>
              <Text style={styles.alertMessageTextStyle}>
                {`${props.alertMessageText}`}
              </Text>
            </View>
            {/* Third Row - Positive and Negative Button */}
            <View style={styles.bottomPart}>
              {
                props.displayPositiveButton
                && 
                <TouchableOpacity
                  onPress={onPositiveButtonPress}
                  style={styles.alertMessageButtonStyle} >
                  <Text style={styles.alertMessageButtonTextStyle}>{props.positiveButtonText}</Text>
                </TouchableOpacity>
              }
              {
                props.displayNegativeButton
                &&
                <TouchableOpacity
                  onPress={onNegativeButtonPress}
                  style={styles.alertMessageButtonStyle}>
                  <Text style={styles.alertMessageButtonTextStyle}>{props.negativeButtonText}</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
      </Modal>
    );
}

CustomAlertComponent.propTypes = {
  displayAlert: PropTypes.bool,
  displayAlertIcon: PropTypes.bool,
  alertTitleText: PropTypes.string,
  alertMessageText: PropTypes.string,
  displayPositiveButton: PropTypes.bool,
  positiveButtonText: PropTypes.string,
  displayNegativeButton: PropTypes.bool,
  negativeButtonText: PropTypes.string,
  onPressPositiveButton : PropTypes.func,
  onPressNegativeButton : PropTypes.func,
  exitAlarmFlag : PropTypes.bool,
}


const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088'
  },
  mainContainer: {
    flexDirection: 'column',
    height: '25%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
    // borderWidth: 2,
    // borderColor: '#FF0000',
    borderRadius: 10,
    padding: 4,
  },
  topPart: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#00FF00',
    paddingHorizontal: 2,
  },
  middlePart: {
    flex: 0.7,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#FF6600',
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 2
  },
  bottomPart: {
    flex: 0.5,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#0066FF',
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'space-evenly'
  },
  alertIconStyle: {
    // borderWidth: 1,
    // borderColor: '#cc00cc',
    marginTop: 5,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  alertTitleTextStyle: {
    flex: 1,
    marginTop: 5,
    marginLeft: 15,
    textAlign: 'justify',
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderColor: '#660066',
    padding: 2,
    marginHorizontal: 2
  },
  alertMessageTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  alertMessageButtonStyle: {
    width: '35%',
    paddingHorizontal: 6,
    borderRadius: 15,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertMessageButtonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
})

export default CustomAlertComponent