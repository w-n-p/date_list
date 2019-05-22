import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class App extends React.Component {
  render() {
    const today = new Date();
    return (
      <View style={styles.container}>
        <Calendar
          current={today}
          minDate={today.setFullYear(today.getFullYear() - 10)}
          maxDate={today.setFullYear(today.getFullYear() + 10)}
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
