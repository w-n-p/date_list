import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class Calendars extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  constructor(props) {
    super(props);
    this.state = {
      bookedDate: [],
      eventList: []
    };
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (date != null) {
      return [day, month, year].join('-');
    } else {
      return null;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const today = new Date();
    return (
      <View style={styles.container}>
        <Calendar
          current={today}
          onDayPress={day => {
            // console.log('selected day', day);
            navigate('Events', { day, title: this.formatDate(day.dateString) });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calender: {
    width: '100%'
  }
});
