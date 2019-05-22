import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { AsyncStorage } from 'react-native';

export default class Event extends React.Component {
  static navigationOptions = {
    title: 'Tambah '
  };
  constructor(props) {
    super(props);
    this.state = {
      bookedDate: [],
      eventList: []
    };
  }
  render() {
    const today = new Date();
    return (
      <View style={styles.container}>
        <Text>event detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
