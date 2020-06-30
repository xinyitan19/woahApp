import * as React from 'react';
import { Text, View, StyleSheet, TextInput, CheckBox, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';
import { Button, Slider } from 'react-native-elements';


import SurveyResults from './SurveyResults';
import MentalStrength from './MentalStrength';

class StartScreen extends React.Component{
  render(){
  return (
<View style={styles.container}>
        <Text style={styles.header}>
        Welcome to WOAH!
      </Text>
      <Text style={styles.paragraph}>
        a holistic, easy-to-use running training plan for you
      </Text>
      <Button onPress={() => {this.props.navigation.navigate('RouteNameTwo')}} title = "Get Started" />
    </View>
  );
  }
}

class SurveyOne extends React.Component{
  constructor() {
   super();
 this.state = {
   name: '',
   email: '',
   phone: '',
   value: '',
   data: [
     {
       label: 'Always',
       value: "Always",
     },
     {
       label: 'Sometimes',
       value: "Sometimes",
     },
     {
       label: 'Never',
       value: "Never",
     },
   ],
   data2: [
    {
      label: 'Always',
      value: "Always",
    },
    {
      label: 'Sometimes',
      value: "Sometimes",
    },
    {
      label: 'Never',
      value: "Never",
    },
  ],
 }
  }

  onPress = data => this.setState({ data });
  onPress2 = data2 => this.setState({ data2 });

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
   <View>
     <Text style={styles.paragraph}>
       To create your plan, we need to ask you some questions.
     </Text>
     <TextInput style = {styles.input} placeholder="Name" onChangeText = {this.nameChange} value = {this.state.name}/>
     <TextInput style = {styles.input} placeholder="Email" onChangeText = {this.emailChange} value = {this.state.email} />
     <TextInput style = {styles.input} placeholder="Phone Number" onChangeText = {this.phoneChange} value = {this.state.phone} keyboardType = "numeric" />
     <Text style={styles.paragraph}>
       Do you believe you can improve in running?
     </Text>
       <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
       <Text style={styles.paragraph}>
       Do you feel motivated to train?
     </Text>
       <RadioGroup radioButtons={this.state.data2} onPress={this.onPress2} />
       <Text style={styles.paragraph}>
How confident are you on a scale of 1-10, 1 being not confident at all and 10 being extremely confident?
     </Text>
       <Slider maximumValue = {10}  step = {1} minimumValue = {1} value={this.state.value} thumbTintColor= 'black'
    onValueChange={(value) => this.setState({ value: value })}
  />
  <Text>Value: {this.state.value}</Text>
       <Button onPress={() => {this.props.navigation.navigate('RouteNameThree', {name: this.state.name, q1: this.state.data, q2: this.state.data2})}} title = "Ready for my recommendations!" />
      </View>
 );
 }
}


class TrainingOverview extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <View style={styles.container1}>
    <Text style={styles.header}>
        Training Overview
      </Text>
<Text style={styles.paragraph}>
        Welcome back, {JSON.stringify(this.props.navigation.getParam('name', 'NO-ID'))}!
      </Text>
      <Button raised ={true} title = "Running" type="outline"/>
      <Button raised ={true} title = "Nutrition" type="outline"/>
      <Button raised ={true} type="outline" onPress={() => {this.props.navigation.navigate('RouteNameFive')}} title = "Mental Strength and Readiness" />
      <Button raised ={true} type="outline" title = "Sleep" />
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
    backgroundColor: '#ffffbf',
    padding: 8,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffbf',
    padding: 8,
  justifyContent: 'space-between',
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