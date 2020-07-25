import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {api} from './api';

export default function MentalStrength(props) {  
    const [isModalVisible, setModalVisible] = useState({rec1: false, rec2:false, rec3:false});
    const [checked, setChecked] = useState({rec1: false, rec2:false, rec3:false});
    const name = props.navigation.getParam('name', ' ');
    console.log(name)

    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');

useEffect(()=>{
  const fetchData = async()=>{
  const {dataa} = await api.get('/Feedback%20sessions?maxRecords=3&view=All%20sessions')
  const filteredData = dataa.filter(name);
  console.log(filteredData)
  setData(filteredData.data);
  };
  fetchData();
}, [query]);


      const toggleModal1 = () => {
        
        setModalVisible({...isModalVisible, rec1: !isModalVisible.rec1});
       }

       const toggleModal2 = () => {
        setModalVisible({...isModalVisible, rec2: !isModalVisible.rec2});
       }

       const toggleModal3 = () => {
        setModalVisible({...isModalVisible, rec3: !isModalVisible.rec3});
       }

      const handlePress = () => {setChecked({...checked, rec1: !checked}) 
        toggleModal1()}

        const handlePress2 = () => {setChecked({...checked, rec2: !checked}) 
          toggleModal2()}

    const handlePress3 = () => {setChecked({...checked, rec3: !checked}) 
            toggleModal3()}
          
    
    const visualize = <ModalWrapper title = "Rec1" isModalVisible = {isModalVisible.rec1} toggleModal = {toggleModal1}/>
    const journal = <ModalWrapper2 title = "Rec2" isModalVisible = {isModalVisible.rec2} toggleModal = {toggleModal2}/>
    const vchecked= props.navigation.getParam('vchecked', 'false')
    
    return (
      <View style = {styles.container}>
        <Button icon={
    <Icon
      name="arrow-left"
      size={15}
      color="white"
    />
  } buttonStyle={styles.back} onPress={() => {props.navigation.navigate('RouteNameFour')}} />
      <Text style={styles.header}>
          Mental Strength and Readiness
        </Text>
        <CheckBox containerStyle = {styles.check} textStyle={styles.checktext} onIconPress checkedIcon = 'check-square-o'uncheckedIcon='square-o' onPress={handlePress} title = "Recommendation 1" checked={checked}/>
        {vchecked===true ? visualize : journal}
        <CheckBox containerStyle = {styles.check} textStyle={styles.checktext} checkedIcon = 'check-square-o'uncheckedIcon='square-o' onPress={handlePress2} title = "Recommendation 2" checked={checked}/>
        <ModalWrapper2 title = "Rec2" isModalVisible = {isModalVisible.rec2} toggleModal = {toggleModal2}/>
        <CheckBox containerStyle = {styles.check} textStyle={styles.checktext} checkedIcon = 'check-square-o' uncheckedIcon='square-o' onPress={handlePress3} title = "Recommendation 3" checked={checked} />
        <ModalWrapper3 title = "Rec3" isModalVisible = {isModalVisible.rec3} toggleModal = {toggleModal3}/>
        </View>
         );
}

function ModalWrapper (props) {

  return(

    <View>
      
  <Modal style = {styles.checktext} isVisible={props.isModalVisible} backdropColor='#fdbd17'>
  <View style={{flex: 1}}>
    <Text style = {styles.butt} >{props.title}</Text>

    <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title="Close" onPress={props.toggleModal} />
  </View>
</Modal>
</View>
  );
}

function ModalWrapper2 (props) {

  return(

    <View>
      
  <Modal style = {styles.checktext} isVisible={props.isModalVisible} backdropColor='#fdbd17'>
  <View style={{flex: 1}}>
    <Text style = {styles.butt} >{props.title}</Text>

    <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title="Close" onPress={props.toggleModal} />
  </View>
</Modal>
</View>
  );
}


function ModalWrapper3 (props) {

  return(

    <View>
      
  <Modal style = {styles.checktext} isVisible={props.isModalVisible} backdropColor='#fdbd17'>
  <View style={{flex: 1}}>
    <Text style = {styles.butt}>{props.title}</Text>

    <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title="Close" onPress={props.toggleModal} />
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
      backgroundColor: '#fdbd17',
      padding: 8,
      marginVertical: 20,
    marginHorizontal: 20
    },
    check:{
      justifyContent: 'center',
      padding: 5,
      marginVertical: 14,
    marginHorizontal: 2,
    backgroundColor: '#fdbd17',
    height: 50
    },
    back:{
      justifyContent: 'center',
      padding: 5,
      marginVertical: 4,
    marginHorizontal: 2,
    backgroundColor: '#fdbd17',
    width: 40,
    },
    checktext:{
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    },
    paragraph: {
      margin: 24,
      fontSize: 14,
      textAlign: 'center',
    },
    butt:{
      justifyContent: 'center',
      color: 'white',
    backgroundColor: '#fdbd17',
    borderColor: 'white',
    fontSize: 20
    },
    header: {
      margin: 24,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
    input: {
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
    }
  });