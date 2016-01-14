/**
 * Picker
 */
const React = require('react-native');
let uuid = 1;

const {
  View,
  PickerIOS,
  PropTypes
} = React;

const Picker = React.createClass({
  propTypes: {
    defaultSelectedValue: PropTypes.any,
    children: PropTypes.array
  },
  getDefaultProps: function (props) {
    return {
      key: "rn-picker" + uuid++
    };
  },
  render() {
    let children = this.props.children;
    let selectedValue = this.props.selectedValue || this.props.defaultSelectedValue;
    if (children && children.length > 0) {
      return (<PickerIOS {...this.props} selectedValue={selectedValue}>
          {children.map((item, i) => {
            return (
              <PickerIOS.Item value={item.value} label={item.label} key={item.value} />
            );
          })}
        </PickerIOS>);
    } else {
      return (<View/>);
    }
  }
});

module.exports = Picker;