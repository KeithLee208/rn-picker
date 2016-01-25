
'use strict';

const React = require('react-native');
const Picker = require('rn-picker');
const {
  AppRegistry,
  View,
  StyleSheet
} = React;

let count = 0;
const len = 10;

var PickerExample = React.createClass({
  getInitialState() {
    return {
      items: this.getItems(count)
    };
  },
  onValueChange(value) {
    console.log('onChange', value);
    this.setState({value});
  },
  getItems(start) {
    const items = [];
    for (let i = start; i < start + len; i++) {
      items.push({
        value: i + '',
        label: 'content ' + i,
      });
    }
    return items;
  },
  render () {
    return (
      <View style={styles.container}>
        <Picker style={styles.picker} defaultSelectedValue="3" selectedValue={this.state.value} onValueChange={this.onValueChange}>
          {this.state.items}
        </Picker>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5F5F9'
  },
});
AppRegistry.registerComponent('simple', () => PickerExample);
