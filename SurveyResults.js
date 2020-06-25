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
      const q2= this.props.navigation.getParam('q2', '[]')
      const name = this.props.navigation.getParam('name', ' ');
      const journal = <Text> Journal </Text>;
      const prepare = <Text> Prepare in your training well </Text>;
      const visualize = <Text> Visualize your success </Text>;
      const visualizebold = <Text style={{fontWeight: "bold"}}> Visualize your success </Text>
      const mindfulness = <Text> Practice Mindfulness </Text>;
      const mbold = <Text style={{fontWeight: "bold"}}> Practice Mindfulness </Text>
      const selftalk = <Text> Improve your self talk </Text>;
      const sbold = <Text style={{fontWeight: "bold"}}> Improve your self talk </Text>
      const reward = <Text> Reward yourself when you achieve a goal </Text>;
      const rbold = <Text style={{fontWeight: "bold"}}> Reward yourself when you achieve a goal </Text>
      const gratitude = <Text> Practice gratitude </Text>;
      const gbold = <Text style={{fontWeight: "bold"}}> Practice gratitude </Text>
      const expectations = <Text> Adjust your expectations </Text>;
      const ebold = <Text style={{fontWeight: "bold"}}> Adjust your expectations </Text>
    return (
      <View>
  <Text style={styles.paragraph}>
          To help improve your mental strength and readiness, try these 3 tips selected for you based off of your survey answers. You can choose different tips if you prefer. More information on these suggestions will be given later.
        </Text>
        {q1[0].selected ? visualizebold : visualize}
        {q1[1].selected ? mbold : mindfulness}
        {q1[2].selected ? sbold : selftalk}
        {q2[0].selected ? rbold : reward}
        {q2[1].selected ? gbold : gratitude}
        {q2[2].selected ? ebold : expectations}
        <Button onPress={() => {this.props.navigation.navigate('RouteNameFour', {name: name})}} title = "I'm all set!" />
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