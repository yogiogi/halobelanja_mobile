import React, {Component} from 'react';
import {
  Animated,
  Easing,
  InteractionManager,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button, Icon} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  RegisterDataBankScreen,
  RegisterScreen,
} from './src/containers/Register';
import {LoginTeleponScreen} from './src/containers/Login';

import {Colors, Fonts} from './src/assets';
import HeaderStyle from './src/Navigation/headerStyle';

type Props = {
  navigation: Object,
};

const defaultNavigationOptions = {
  headerForceInset: {top: 'never'},
};

const backButton = navigation => {
  return (
    <Button
      style={HeaderStyle.center}
      transparent
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        name="arrow-back"
        type="MaterialIcons"
        style={{color: Colors.background}}
      />
    </Button>
  );
};

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const loginStack = createStackNavigator({
  LoginTeleponScreen: {
    screen: LoginTeleponScreen,
    navigationOptions: () => ({
      header: null,
    }),
    transitionConfig: noTransitionConfig,
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      header: null,
    }),
    transitionConfig: noTransitionConfig,
  },
  RegisterDataBankScreen: {
    screen: RegisterDataBankScreen,
    navigationOptions: navigation => ({
      headerTitle: 'Register Data Bank',
      headerStyle: {backgroundColor: Colors.header, elevation: 0},
      headerTintColor: Colors.header,
      gesturesEnabled: false,
      headerLeft: backButton(navigation),
    }),
    transitionConfig: noTransitionConfig,
  },
});

const PrimaryNav = createStackNavigator({
  loginStack: {
    screen: loginStack,
    navigationOptions: () => ({
      gestureEnabled: false,
    }),
  },
});

export default createAppContainer(loginStack);
