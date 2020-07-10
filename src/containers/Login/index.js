import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Container, Footer, Button} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';
import InputPassword from '../../components/AuthComponent/InputPassword';
import InputText from '../../components/AuthComponent/InputText';
import {isEmail, validateEmail, isNumber} from '../../constants/validator';
import {Images} from '../../assets';
import styles from './styles';

type PropsType = {
  fetching: boolean,
  success: boolean,
  error: Object,
  navigation: Object,
  clearError: Function,
  initialSuccess: Function,
  createProduct: Function,
  updateProduct: Function,
  trackEvent: Function,
  detail: Object,
  makeGoBackFunc: Function,
  coachMarkProps: Object,
};

const TITLES: Object = {
  title: 'Halo Belanja',
  subTitle: 'Untung Sebelum Belanja',
  PlaceholderTelepon: 'Nomer Telepon/Email',
  PlaceholderPaswword: 'Kata Sandi',
  Masuk: 'Masuk',
  Atau: 'atau masuk dengan',
  Register: 'Belum daftar',
};

export class LoginTeleponScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loginTeleponEmailValue: '',
      loginMasukDisable: true,
      password: '',
      errors: {},
      isForbidToSubmitForm: true,
    };
  }

  _setForm = paramsName => value => {
    this.setState(
      {
        [paramsName]: value,
      },
      this.checkFormToEnableSubmitButton,
    );
  };

  checkFormToEnableSubmitButton = () => {
    const {loginTeleponEmailValue, password} = this.state;
    let errorLogin = null;
    let submitFormVisible = false;

    if (isNumber(loginTeleponEmailValue)) {

    } else if (
      !isEmail(loginTeleponEmailValue) ||
      validateEmail(loginTeleponEmailValue)
    ) {
      errorLogin = 'Format kurang tepat, silahkan masukkan yang benar';
      submitFormVisible = true;
    }

    if (loginTeleponEmailValue && password) {
      submitFormVisible = false;
    }

    this.setState({
      isForbidToSubmitForm: submitFormVisible,
      errors: {
        ...this.state.errors,
        loginTeleponEmailValue: errorLogin,
        password: null,
      },
    });
  };

  _navigateLogin = () => {
    const {navigation, trackEvent} = this.props;
    navigation.navigate('RegisterScreen');
  };

  render() {
    const {
      loginTeleponEmailValue,
      password,
      errors,
      isForbidToSubmitForm,
    } = this.state;
    return (
      <View style={styles.containerWrapper}>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.imageWrapper}>
              <Image
                source={Images.iconTitle}
                resizeMode="contain"
                resizeMethod="scale"
                style={styles.imageContent}
              />
            </View>
            <View style={styles.titleText}>
              <Text style={styles.titleWrapper}>
                {TITLES.title.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={styles.rowSub}>
            <Text style={styles.subTitle}>{TITLES.subTitle}</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <InputText
            labelName={TITLES.PlaceholderTelepon}
            onChangeText={this._setForm('loginTeleponEmailValue')}
            value={loginTeleponEmailValue}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
          />
          <InputPassword
            labelName={TITLES.PlaceholderPaswword}
            onChangeText={this._setForm('password')}
            value={password}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            // onPress={  }
          >
            <Text style={styles.TextStyle}> Masuk </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.daftarWrapper}>
          <Text style={styles.sectionTitle}>Belum punya akun? </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._navigateLogin()}>
            <Text style={styles.TextDaftarStyle}> Daftar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bantuanWrapper}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._navigateLogin()}>
            <Text style={styles.TextDaftarStyle}> Bantuan </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginTeleponScreen;
