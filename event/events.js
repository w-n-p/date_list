import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Events extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '',
      bookedDate: [],
      eventList: [],
      data: {
        date: {},
        list: []
      }
    };
  }

  componentDidMount() {
    this.getData();
    const { navigation } = this.props;
    const date = navigation.getParam('day');
    this.setState({
      date: date
    });
  }

  getData() {
    AsyncStorage.getItem('LIST').then(res => {
      console.log(res);
      this.setState({
        eventList: JSON.parse(res).list
      });
    });
  }

  addList = event => {
    if (this.state.text != '' && !this.state.text.startsWith(' ')) {
      let list = this.state.eventList;
      list.push(this.state.text);
      this.setState({
        text: '',
        eventList: list
      });
      let newData = {
        date: this.state.date,
        list: list
      };

      AsyncStorage.setItem('LIST', JSON.stringify(newData)).then(res => {
        console.log(res);
      });
    } else {
      this.setState({
        text: ''
      });
    }
  };

  render() {
    const today = new Date();
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingBottom: 5,
            paddingTop: 5
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Masukkan teks"
          />
          <Button style={styles.button} title="Tambah" onPress={this.addList} />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          list event
        </Text>
        {/* list items */}
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.eventList}
            renderItem={({ item, index }) => (
              <Text
                style={{
                  fontSize: 18
                }}
              >
                {index + 1}- {item}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center'
  },
  inputGroup: {
    width: '100%',
    alignItems: 'center'
  },
  listContainer: {
    width: '100%',
    padding: 5
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    borderColor: 'gray',
    // borderRadius: 2,
    borderWidth: 1
  },
  button: {
    width: '90%'
  }
});
