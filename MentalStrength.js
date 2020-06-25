import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, CheckBox, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';

export default class MentalStrength extends React.Component{

    constructor(props) {
      super(props);
    }
  
       toggleModal = () => {
        setModalVisible(!isModalVisible);
       }
  
    render(){

    return (
      <View>
      <Text style={styles.header}>
          Mental Strength and Readiness
        </Text>
        <Button onPress={() => {toggleModal}} title = "Recommendation 1" />
        <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <Text>Hello!</Text>
  
              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
        <Button onPress={() => {toggleModal}} title = "Recommendation 2" />
        <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <Text>Hello!</Text>
  
              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
        <Button onPress={() => {toggleModal}} title = "Recommendation 3" />
        <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <Text>Hello!</Text>
  
              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
        </View>
         );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ffffbf',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 14,
      textAlign: 'center',
    },
    header: {
      margin: 24,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
    }
  });