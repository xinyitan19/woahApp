import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, CheckBox, MultipleChoice, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';

export default class SurveyResults extends React.Component{
  constructor(props) {
    super(props);
  }
    render(){
      const { navigation } = this.props;
      const q1= this.props.navigation.getParam('q1', '[]')
      const journal = <Text> Journal </Text>;
      const prepare = <Text> Prepare in your training well </Text>;
    return (
      <View>
  <Text style={styles.paragraph}>
          To help improve your mental strength and readiness, try these 3 tips selected for you based off of your survey answers. You can choose different tips if you prefer. More information on these suggestions will be given later.
        </Text>
        {q1[0].checked ? journal : prepare}
        <Button onPress={() => {this.props.navigation.navigate('RouteNameFour')}} title = "I'm all set!" />
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