import * as React from 'react';
import { Text, View, StyleSheet, TextInput, CheckBox, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';
import { Button, Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import SurveyResults from './SurveyResults';
import MentalStrength from './MentalStrength';
import {api} from './api';


class StartScreen extends React.Component{
  async componentDidMount(){
  const {data} = await api.get('/Feedback%20sessions?maxRecords=3&view=All%20sessions')
  // console.log(data)
  }
  render(){
  return (
<View style={styles.container}>
        <Text style={styles.header}>
        Welcome to WOAH!
      </Text>
      <Text style={styles.paragraph}>
        a holistic, easy-to-use running training plan for you
      </Text>
      <Button color = {'white'} buttonStyle = {styles.check}  size={20} onPress={() => {this.props.navigation.navigate('RouteNameTwo')}} title = "Get Started" />
    </View>
  );
  }
}

class SurveyOne extends React.Component{
  constructor() {
   super();
 this.state = {
   jchecked: false,
   pchecked: false,
   machecked: false,
  vchecked: false,
  mchecked: false,
  schecked: false,
  rchecked: false,
  gchecked: false,
  echecked: false,
   name: '',
   email: '',
   phone: '',
   value: '',
   data: [
     {
       label: 'Always',
       value: "Always",
       size: 20,
       color: 'white'
     },
     {
       label: 'Sometimes',
       value: "Sometimes",
       size: 20,
       color: 'white'
     },
     {
       label: 'Never',
       value: "Never",
       size: 20,
       color: 'white'
     },
   ],
   data2: [
    {
      label: 'Always',
      value: "Always",
      size: 20,
      color: 'white'
    },
    {
      label: 'Sometimes',
      value: "Sometimes",
      size: 20,
      color: 'white'
    },
    {
      label: 'Never',
      value: "Never",
      size: 20,
      color: 'white'
    },
  ],
 }
  }

  onPress1 = data => this.setState({ data });
  onPress2 = data2 => this.setState({ data2 });

 handleSubmit = () => {
   var datavalue1 = null
   this.state.data.forEach((item)=> {
     if(item.selected) 
     {datavalue1=item.value}
   })
   var datavalue2 = null
   this.state.data2.forEach((item)=> {
    if(item.selected) 
    {datavalue2=item.value}
  })
   const data = {fields: {name: this.state.name, email: this.state.email, phone: this.state.phone, value: this.state.value, data: datavalue1, data2: datavalue2}}
   console.log(data)
   api.post('/Feedback%20sessions', data)
  .then(function (response) {
    console.log(response); 
  })
  .catch(function (error) {
    console.log(error);
    console.log("console LOG")
  });
  this.props.navigation.navigate('RouteNameThree', {name: this.state.name, q1: this.state.data, q2: this.state.data2, value: this.state.value, jchecked: this.state.jchecked, pchecked: this.state.pchecked, machecked: this.state.machecked, vchecked: this.state.vchecked, mchecked: this.state.mchecked, schecked: this.state.schecked, rchecked: this.state.rchecked, gchecked: this.state.gchecked, echecked: this.state.echecked})
}

nameChange = name => { 
 this.setState({name})
}

emailChange = email => {
 this.setState({email})
}

phoneChange = phone => {
 this.setState({phone})
}

 render(){
  let selectedButton = this.state.data.find(e => e.selected == true);
  selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
 return (
   <View style = {styles.container}>
     <Text style={styles.paragraph}>
       To create your plan, we need to ask you some questions.
     </Text>
     <TextInput placeholderTextColor = {'white'} style = {styles.input} placeholder="Name" onChangeText = {this.nameChange} value = {this.state.name}/>
     <TextInput placeholderTextColor = {'white'} style = {styles.input} placeholder="Email" onChangeText = {this.emailChange} value = {this.state.email} />
     <TextInput placeholderTextColor = {'white'} style = {styles.input} placeholder="Phone Number" onChangeText = {this.phoneChange} value = {this.state.phone} keyboardType = "numeric" />
     <Text style={styles.paragraph}>
       Do you believe you can improve in running?
     </Text>
       <RadioGroup radioButtons={this.state.data} onPress={this.onPress1} />
       <Text style={styles.paragraph}>
       Do you feel motivated to train?
     </Text>
       <RadioGroup radioButtons={this.state.data2} onPress={this.onPress2} />
       <Text style={styles.paragraph}>
How confident are you on a scale of 1-10, 1 being not confident at all and 10 being extremely confident?
     </Text>
       <Slider thumbTintColor = '#ffffff' thumbStyle={styles.slide} trackStyle={styles.slide} maximumValue = {10}  step = {1} minimumValue = {1} value={this.state.value} thumbTintColor= 'black'
    onValueChange={(value) => this.setState({ value: value })}
  />
  <Text style={styles.paragraph}>Value: {this.state.value}</Text>
       <Button titleStyle = {styles.butt} buttonStyle= {styles.butt} onPress= {this.handleSubmit} title = "Ready for my recommendations!" />
      </View>
 );
 }
}


class TrainingOverview extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const jchecked= this.props.navigation.getParam('jchecked', 'false')
     const pchecked= this.props.navigation.getParam('pchecked', 'false')
    const  machecked= this.props.navigation.getParam('machecked', 'false')
    const vchecked= this.props.navigation.getParam('vchecked', 'false')
    const mchecked= this.props.navigation.getParam('mchecked', 'false')
    const schecked= this.props.navigation.getParam('schecked', 'false')
    const rchecked= this.props.navigation.getParam('rchecked', 'false')
    const gchecked= this.props.navigation.getParam('gchecked', 'false')
    const echecked= this.props.navigation.getParam('echecked', 'false')
    const q1= this.props.navigation.getParam('q1', '[]')
    const q2= this.props.navigation.getParam('q2', '[]')
    const name = this.props.navigation.getParam('name', ' ');
    
  return (
    <View style={styles.container1}>
      <Button icon={
    <Icon
      name="arrow-left"
      size={15}
      color="white"
    />
  } buttonStyle={styles.back} onPress={() => {this.props.navigation.navigate('RouteNameThree'), {jchecked: jchecked, pchecked: pchecked, machecked: machecked, vchecked: vchecked, mchecked: mchecked, schecked:schecked, rchecked:rchecked, gchecked:gchecked, echecked: echecked, q1: q1, q2: q2, name: name}}}  />
    <Text style={styles.header}>
        Training Overview
      </Text>
<Text style={styles.paragraph}>
        Welcome back, {JSON.stringify(this.props.navigation.getParam('name', 'NO-ID'))}!
      </Text>
      <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title = "Running" />
      <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title = "Nutrition" />
      <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} onPress={() => {this.props.navigation.navigate('RouteNameFive'), {jchecked: jchecked, pchecked: pchecked, machecked: machecked, vchecked: vchecked, mchecked: mchecked, schecked:schecked, rchecked:rchecked, gchecked:gchecked, echecked: echecked, q1: q1, q2: q2, name: name}}} title = "Mental Strength and Readiness" />
      <Button titleStyle = {styles.butt} buttonStyle = {styles.butt} title = "Sleep" />
      </View>
       );
  }
}


const AppNavigator1 = createSwitchNavigator({RouteNameOne: StartScreen, 
RouteNameTwo: SurveyOne, 
RouteNameThree: SurveyResults,
RouteNameFour: TrainingOverview,
RouteNameFive: MentalStrength,
});

const AppNavigator = createAppContainer(AppNavigator1)

export default class App extends React.Component {
  
  render(){
  return <AppNavigator/>;
}

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
    marginVertical: 6,
  marginHorizontal: 2,
  backgroundColor: '#fdbd17',
  },
  slide:{
backgroundColor: 'white',
marginBottom: 2
  },
  butt:{
    justifyContent: 'center',
    
  backgroundColor: '#fdbd17',
  borderColor: 'white',
  fontSize: 20
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
    fontSize: 15,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fdbd17',
    padding: 8,
  
  marginVertical: 20,
    marginHorizontal: 20
  },
  paragraph: {
    margin: 6,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  header: {
    margin: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  }
});