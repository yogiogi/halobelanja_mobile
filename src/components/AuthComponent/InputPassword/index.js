import {Input, Item, Label, Text} from 'native-base';
import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {removeEmojiFromString} from '../../../constants/emojiRegex';
import styles from './styles';
import {Images} from '../../../assets';

type Props = {
  labelName: string,
  errorText: string,
  value: string,
  inputType?: ['default', 'numeric'],
  contentHeight?: number,
  onChangeText: Function,
  multiLine?: Boolean,
  maxLength?: number,
  borderStyle?: Object,
  textStyle?: Object,
  labelStyle?: Object,
};

export class InputPasswordComponent extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordShown: false,
    };
  }

  _toggleShowPassword = () => {
    this.setState({
      isPasswordShown: !this.state.isPasswordShown,
    });
  };

  render() {
    const {isPasswordShown} = this.state;
    const {
      labelName,
      errorText,
      value,
      inputType = 'default',
      contentHeight,
      multiLine,
      maxLength,
      onChangeText,
      borderStyle,
      labelStyle,
      textStyle,
    } = this.props;
    return (
      <View style={[styles.sectionContainer, borderStyle]}>
        <Item
          floatingLabel
          style={[styles.inputSection, errorText ? styles.inputError : null]}>
          <Label style={[styles.labelStyle, labelStyle]}>{labelName}</Label>
          <Input
            multiline={multiLine}
            style={[
              styles.inputFloatingText,
              {height: contentHeight},
              textStyle,
            ]}
            maxLength={maxLength}
            value={value}
            keyboardType={inputType}
            secureTextEntry={!isPasswordShown}
            autoCorrect={false}
            onChangeText={updatedValue => {
              const filteredValue = removeEmojiFromString(updatedValue);
              onChangeText(filteredValue);
            }}
          />
        </Item>
        <TouchableOpacity
          onPress={this._toggleShowPassword}
          style={styles.showPasswordWrapper}>
          <Image
            source={Images.showPassword}
            style={styles.showPasswordButton}
          />
        </TouchableOpacity>
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      </View>
    );
  }
}

InputPasswordComponent.defaultProps = {
  contentHeight: 1,
  multiLine: false,
  maxLength: 100,
};

export default InputPasswordComponent;
