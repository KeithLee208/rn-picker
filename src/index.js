/**
 * Picker
 */
import React, { PropTypes, View, PickerIOS } from 'react-native';
const noop = () => {};
let uuid = 1;

const Picker = React.createClass({
  propTypes: {
    defaultSelectedValue: PropTypes.any,
    children: PropTypes.array
  },
  getDefaultProps: function (props) {
    return {
      key: "rn-picker" + uuid++,
      onValueChange: noop
    };
  },
  getInitialState() {
    return {
      value: this.props.selectedValue
    };
  },
  onValueChange(value) {
    if (value === '' || value === this.state.value) {
      return;
    }
    this.state.value = value;
    this.props.onValueChange(value);
  },
  render() {
    let children = this.props.children;
    let selectedValue = this.props.selectedValue || this.props.defaultSelectedValue;
    if (!(children && children.length > 0)) {
      children = [{label: '', value: ''}];
    }
    return (<PickerIOS {...this.props} selectedValue={selectedValue} onValueChange={this.onValueChange}>
        {children.map((item, i) => {
          return (
            <PickerIOS.Item value={item.value} label={item.label} key={item.value} />
          );
        })}
      </PickerIOS>);
  }
});

module.exports = Picker;