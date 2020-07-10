import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Spinner} from 'native-base';
import Button from '../../components/Button';
import styles from './styles';

export class penarikanScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    const {navigate} = this.props.navigation;
    navigate('AktivasiKodeScreen');
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View>
          <Text />
          <Text />
          <View>
            <Text />
            <View>
              <Text />
              <Text />
              <Text />
            </View>
          </View>
        </View>
        <Button text="Submit" type="outlined" bordered onPress={this.onPress} />
      </View>
    );
  }
}
