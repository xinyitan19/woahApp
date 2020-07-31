import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {api} from './api';

const MyContext = React.createContext();

export default class SurveyResults extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
      jchecked: this.props.navigation.getParam('jchecked', 'false'),
      pchecked: this.props.navigation.getParam('pchecked', 'false'),
      machecked: this.props.navigation.getParam('machecked', 'false'),
      vchecked: this.props.navigation.getParam('vchecked', 'false'),
     mchecked: this.props.navigation.getParam('mchecked', 'false'),
       schecked: this.props.navigation.getParam('schecked', 'false'),
       rchecked: this.props.navigation.getParam('rchecked', 'false'),
       gchecked: this.props.navigation.getParam('gchecked', 'false'),
       echecked: this.props.navigation.getParam('echecked', 'false'),
       q1: this.props.navigation.getParam('q1', '[]'),
       q2: this.props.navigation.getParam('q2', '[]'),
       value: this.props.navigation.getParam('value', ' ')
       
    }
    
  }

  async componentDidMount(){
    this.update();
    const id= this.props.navigation.getParam('id', '')
    //console.log("hello")
    console.log(id, "ID")
  const mydata = {"records": [{
    "id": id,
"fields": {jchecked: this.state.jchecked, pchecked: this.state.pchecked, machecked: this.state.machecked, vchecked: this.state.vchecked, mchecked: this.state.mchecked, schecked: this.state.schecked, rchecked: this.state.rchecked, gchecked: this.state.gchecked, echecked: this.state.echecked}}]
  }
 // console.log(this.state, "state")     
  const response = await api.patch('/Feedback%20sessions', mydata)
      console.log(response)
    }

    

update = () => {
 //this.setState({vchecked: this.state.q1[0].selected, mchecked: this.state.q1[1].selected})
  //console.log(this.state.vchecked, "VCHECKED")
 // this.setState({vchecked: true, mchecked: this.state.q1[1].selected})
  if(this.state.q1[0].selected){
      this.setState({vchecked: true})
      console.log(this.state.vchecked, "VCHECKED")
  }
  if(this.state.q1[1].selected){
    this.setState({mchecked: true})
}
  if(this.state.q1[2].selected){
  this.setState({schecked: true})
}

if(this.state.q2[0].selected){
  this.setState({rchecked: true})
}
if(this.state.q2[1].selected){
  this.setState({gchecked: true})
}
if(this.state.q2[2].selected){
  this.setState({echecked: true})
}
if(this.state.value===1 || this.state.value ===2 || this.state.value===3){
  this.setState({jchecked: true})
}
if(this.state.value===4 || this.state.value ===5 || this.state.value===6){
  this.setState({pchecked: true})
}
if(this.state.value===7 || this.state.value ===8 || this.state.value===9 || this.state.value===10){
  this.setState({machecked: true})
}
     }

    render(){
      
      const { navigation } = this.props;
      const name = this.props.navigation.getParam('name', ' ');
      
      const journal = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.jchecked}
      onPress={() => this.setState({jchecked: !this.state.jchecked})} title = "Journal" />;
      const journalbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.jchecked}
      onPress={() => this.setState({jchecked: !this.state.jchecked})} title = "Journal" />;
      const prepare = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.pchecked}
      onPress={() => this.setState({pchecked: !this.state.pchecked})} title = "Prepare in your training well" />;
      const prepbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.pchecked}
      onPress={() => this.setState({pchecked: !this.state.pchecked})} title = "Prepare in your training well" />;
      const mantra = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext}  checked={this.state.machecked}
      onPress={() => this.setState({machecked: !this.state.machecked})} title = "Create and practice a  mantra      " />;
      const mantrabold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.machecked}
      onPress={() => this.setState({machecked: !this.state.machecked})} title = "Create and practice a  mantra      " />;
      const visualize = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.vchecked}
      onPress={() => this.setState({vchecked: !this.state.vchecked})} title = "Visualize your success" />;
      const visualizebold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.vchecked}
      onPress={() => this.setState({vchecked: !this.state.vchecked})} title = "Visualize your success" />;
      const mindfulness = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.mchecked}
      onPress={() => this.setState({mchecked: !this.state.mchecked})} title = "Practice mindfulness" />;
      const mbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.mchecked}
      onPress={() => this.setState({mchecked: !this.state.mchecked})} title = "Practice mindfulness" />;
      const selftalk = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.schecked}
      onPress={() => this.setState({schecked: !this.state.schecked})} title = "Improve your self talk" />;
      const sbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.schecked}
      onPress={() => this.setState({schecked: !this.state.schecked})} title = "Improve your self talk" />;
      const reward = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.rchecked}
      onPress={() => this.setState({rchecked: !this.state.rchecked})} title = "Reward yourself when you achieve a goal" />;
      const rbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.rchecked}
      onPress={() => this.setState({rchecked: !this.state.rchecked})} title = "Reward yourself when you achieve a goal" />;
      const gratitude = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.gchecked}
      onPress={() => this.setState({gchecked: !this.state.gchecked})} title = "Practice gratitude" />;
      const gbold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.gchecked}
      onPress={() => this.setState({gchecked: !this.state.gchecked})} title = "Practice gratitude" />;
      const expectations = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.echecked}
      onPress={() => this.setState({echecked: !this.state.echecked})} title = "Adjust your expectations" />;
      const ebold = <CheckBox size = {12} containerStyle = {styles.check} textStyle={styles.checktext} checked={this.state.echecked}
      onPress={() => this.setState({echecked: !this.state.echecked})} title = "Adjust your expectations" />;
      
      return (
      <View style={styles.container}>
        <Button icon={
    <Icon
      name="arrow-left"
      size={15}
      color="white"
    />
  } buttonStyle={styles.back} onPress={() => {this.props.navigation.navigate('RouteNameTwo', {name: name, q1: this.state.q1, q2: this.state.q2, jchecked: this.state.jchecked, pchecked: this.state.pchecked, machecked: this.state.machecked, vchecked: this.state.vchecked, mchecked: this.state.mchecked, schecked: this.state.schecked, rchecked: this.state.rchecked, gchecked: this.state.gchecked, echecked: this.state.echecked})}}  />
  <Text style={styles.paragraph}>
          To help improve your mental strength and readiness, try these 3 tips selected for you based off of your survey answers. You can choose different tips if you prefer. More information on these suggestions will be given later.
        </Text>
        {this.state.q1[0].selected ? visualizebold : visualize}
        {this.state.q1[1].selected ? mbold : mindfulness}
        {this.state.q1[2].selected ? sbold : selftalk}
        {this.state.q2[0].selected ? rbold : reward}
        {this.state.q2[1].selected ? gbold : gratitude}
        {this.state.q2[2].selected ? ebold : expectations}
        {this.state.value===1 || this.state.value ===2 || this.state.value===3 ? journalbold : journal}
        {this.state.value===4 || this.state.value ===5 || this.state.value===6 ? prepbold : prepare}
        {this.state.value===7 || this.state.value ===8 || this.state.value===9 || this.state.value=== 10 ? mantrabold : mantra}
        
      <Button buttonStyle={styles.check} onPress={() => {this.props.navigation.navigate('RouteNameFour', {name: name, q1: this.state.q1, q2: this.state.q2, jchecked: this.state.jchecked, pchecked: this.state.pchecked, machecked: this.state.machecked, vchecked: this.state.vchecked, mchecked: this.state.mchecked, schecked: this.state.schecked, rchecked: this.state.rchecked, gchecked: this.state.gchecked, echecked: this.state.echecked})}} title = "I'm all set!" />
        </View>
         );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
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
    paragraph: {
      margin: 13,
      fontSize: 16,
      textAlign: 'center',
      color: '#fdbd17',
      fontWeight: 'bold',
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