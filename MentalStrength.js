import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, CheckBox, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';

export default function MentalStrength(){
  
      const [isModalVisible, setModalVisible] = useState(false);
  
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
       }

    return (
      <View>
      <Text style={styles.header}>
          Mental Strength and Readiness
        </Text>
        <Button onPress={toggleModal} title = "Recommendation 1" />
        <ModalWrapper title = "Rec1" isModalVisible = {isModalVisible} toggleModal = {toggleModal}/>
        <Button onPress={toggleModal} title = "Recommendation 2" />
        <ModalWrapper title = "Rec2" isModalVisible = {isModalVisible} toggleModal = {toggleModal}/>
        <Button onPress={toggleModal} title = "Recommendation 3" />
        <ModalWrapper title = "Rec3" isModalVisible = {isModalVisible} toggleModal = {toggleModal}/>
        </View>
         );
}

function ModalWrapper (props) {

  return(

    <View>
      
  <Modal isVisible={props.isModalVisible} backdropColor='#ffffbf'>
  <View style={{flex: 1}}>
    <Text style = {{color: 'black'}}>{props.title}</Text>

    <Button title="Close" onPress={props.toggleModal} />
  </View>
</Modal>
</View>
  );
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