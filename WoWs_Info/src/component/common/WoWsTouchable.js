import React from 'react';
import { TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';

// Only Android has native feedback
const Touchable = (Platform.OS == 'android') ? TouchableNativeFeedback : TouchableWithoutFeedback;

class WoWsTouchable extends React.PureComponent {
  render() {
    const { onPress, style, children } = this.props;
    return (
      <Touchable onPress={onPress} style={style}>
        {children}
      </Touchable>
    )
  }
}

export {WoWsTouchable};