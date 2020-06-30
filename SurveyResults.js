import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import { Button, CheckBox } from 'react-native-elements';

const MyContext = React.createContext();

export default class SurveyResults extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      vchecked: false,
      mchecked: false,
      schecked: false,
    }
  }
    render(){
      const { navigation } = this.props;
      const q1= this.props.navigation.getParam('q1', '[]')
      const q2= this.props.navigation.getParam('q2', '[]')
      const name = this.props.navigation.getParam('name', ' ');
      const journal = <Text> Journal </Text>;
      const prepare = <Text> Prepare in your training well </Text>;
      const visualize = <CheckBox checked={this.state.vchecked}
      onPress={() => this.setState({vchecked: !this.state.vchecked})} title = "Visualize your success" />;
      const visualizebold = <CheckBox checked={!this.state.vchecked}
      onPress={() => this.setState({vchecked: !this.state.vchecked})} title = "Visualize your success" />;
      const mindfulness = <CheckBox checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Practice mindfulness" />;
      const mbold = <CheckBox checked={!this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Practice mindfulness" />;
      const selftalk = <CheckBox checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Improve your self talk" />;
      const sbold = <CheckBox checked={!this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Improve your self talk" />;
      const reward = <CheckBox checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Reward yourself when you achieve a goal" />;
      const rbold = <CheckBox checked={!this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Reward yourself when you achieve a goal" />;
      const gratitude = <CheckBox checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Practice gratitude" />;
      const gbold = <CheckBox checked={!this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Practice gratitude" />;
      const expectations = <CheckBox checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Adjust your expectations" />;
      const ebold = <CheckBox checked={!this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})} title = "Adjust your expectations" />;
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