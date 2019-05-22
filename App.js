import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Calendars from './calendar/calendars.js';
import Event from './event/event.js';
import Events from './event/events.js';

const MainNavigator = createStackNavigator({
  Home: { screen: Calendars },
  Event: { screen: Event },
  Events: { screen: Events }
});

const App = createAppContainer(MainNavigator);

export default App;
