import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';
import { Button, CheckBox } from 'react-native-elements';

export default function MentalStrength(){
  
      const [isModalVisible, setModalVisible] = useState({rec1: false, rec2:false, rec3:false});
    const [checked, setChecked] = useState(false);

      const toggleModal1 = () => {
        setModalVisible({...isModalVisible, rec1: !isModalVisible.rec1});
       }

       const toggleModal2 = () => {
        setModalVisible({...isModalVisible, rec2: !isModalVisible.rec2});
       }

       const toggleModal3 = () => {
        setModalVisible({...isModalVisible, rec3: !isModalVisible.rec3});
       }

      const handlePress = () => {setChecked(!checked) 
        toggleModal1()}

        const handlePress2 = () => {setChecked(!checked) 
          toggleModal2()}

          const handlePress3 = () => {setChecked(!checked) 
            toggleModal3()}

    return (
      <View>
      <Text style={styles.header}>
          Mental Strength and Readiness
        </Text>
        <CheckBox onIconPress checkedIcon = 'check-square-o'uncheckedIcon='square-o' onPress={handlePress} title = "Recommendation 1" checked={checked}/>
        <ModalWrapper title = "Rec1" isModalVisible = {isModalVisible.rec1} toggleModal = {toggleModal1}/>
        <CheckBox checkedIcon = 'check-square-o'uncheckedIcon='square-o' onPress={handlePress2} title = "Recommendation 2" checked={checked}/>
        <ModalWrapper2 title = "Rec2" isModalVisible = {isModalVisible.rec2} toggleModal = {toggleModal2}/>
        <CheckBox checkedIcon = 'check-square-o'uncheckedIcon='square-o' onPress={handlePress3} title = "Recommendation 3" checked={checked} />
        <ModalWrapper3 title = "Rec3" isModalVisible = {isModalVisible.rec3} toggleModal = {toggleModal3}/>
        </View>
         );
}

function ModalWrapper (props) {

  return(

    <View>
      
  <Modal isVisible={props.isModalVisible} backdropColor='#ffffbf'>
  <View style={{flex: 1}}>
    <Text style = {{color: 'black'}}>{props.title}</Text>

    <Button title="Close" onPress={props.toggleModal1} />
  </View>
</Modal>
</View>
  );
}

function ModalWrapper2 (props) {

  return(

    <View>
      
  <Modal isVisible={props.isModalVisible} backdropColor='#ffffbf'>
  <View style={{flex: 1}}>
    <Text style = {{color: 'black'}}>{props.title}</Text>

    <Button title="Close" onPress={props.toggleModal2} />
  </View>
</Modal>
</View>
  );
}

function ModalWrapper3 (props) {

  return(

    <View>
      
  <Modal isVisible={props.isModalVisible} backdropColor='#ffffbf'>
  <View style={{flex: 1}}>
    <Text style = {{color: 'black'}}>{props.title}</Text>

    <Button title="Close" onPress={props.toggleModal3} />
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