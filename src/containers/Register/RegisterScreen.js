import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Container, Footer, Button} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';

import styles from './styles';
import InputText from '../../components/AuthComponent/InputText';
import InputPassword from '../../components/AuthComponent/InputPassword';
import {Images} from '../../assets';
import {isEmail, validateEmail} from '../../constants/validator';
import {set} from 'react-native-reanimated';

type Props = {
  navigation: Object,
  resetCreateSuccess: Function,
  trackEvent: Function,
};

type State = {
  userName: String,
  alamat: String,
  telepon: String,
  email: String,
  password: String,
  errors: Object,
  setLoading: Boolean,
  setIsRegistrationSuccess: Boolean,
};

const TITLES: Object = {
  title: 'Halo Belanja',
  subTitle: 'Untung Sebelum Belanja',
  Information: 'Lengkapi form pendaftaran',
  PlaceholderNama: 'Nama Lengkap',
  PlaceholderAlamat: 'Alamat',
  PlaceholderTelepon: 'Nomer Telepon',
  PlaceholderEmail: 'Email',
  PlaceholderPassword: 'Kata Sandi',
  Daftar: 'Daftar',
  tanyaAkun: 'Sudah punya akun?',
  Login: 'Login',
};

export class RegisterScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      alamat: '',
      telepon: '',
      email: '',
      password: '',
      loginMasukDisable: true,
      setLoading: false,
      setIsRegistrationSuccess: false,
      errors: {},
    };
  }

  _handleSubmitButton = () => {
    const {userName, alamat, telepon, email, password} = this.state;

    let setLoading = false;
    let setIsRegistrationSuccess = false;

    setLoading = true;
    var dataToSend = {userName, alamat, telepon, email, password};
    var formBody = [];
    for (var key in dataToSend) {
      var encodeKey = encodeURIComponent(key);
      var encodeValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodeKey + '=' + encodeValue);
    }

    formBody = formBody.join('&');

    fetch('https://aboutreact.herokuapp.com/register.php', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading = false;

        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 1) {
          setIsRegistrationSuccess = false;
          console.log('Registration Successful. Please Login to proceed');
        } else {
          console.log('Registration Successful. Please Login to proceed');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading = false;
        console.error(error);
      });
  };

  _setForm = paramsName => value => {
    this.setState(
      {
        [paramsName]: value,
      },
      this.checkFormToEnableSubmitButton,
    );
  };

  checkFormToEnableSubmitButton = () => {
    const {userName, alamat, telepon, email, password} = this.state;
    let errorEmail = null;
    let submitFormVisible = false;

    if (userName && alamat && telepon && email && password) {
      submitFormVisible = false;
    }

    if (!isEmail(email) || validateEmail(email)) {
      errorEmail = 'Format kurang tepat, silahkan masukkan yang benar';
      submitFormVisible = true;
    }

    this.setState({
      isForbidToSubmitForm: submitFormVisible,
      errors: {
        ...this.state.errors,
        email: errorEmail,
        password: null,
      },
    });
  };

  _NavigateMasuk = () => {
    const {state, navigate, goBack} = this.props.navigation;
    navigate('LoginTeleponScreen');
  };

  _NavigateDaftar = () => {
    const {state, navigate, goBack} = this.props.navigation;
    navigate('RegisterDataBankScreen');
  };

  render() {
    const {
      userName,
      alamat,
      telepon,
      email,
      password,
      errors,
      isForbidToSubmitForm,
      loginTeleponMaxLength,
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
        <View style={styles.textInfowrapper}>
          <Text style={styles.infoTitle}>{TITLES.Information}</Text>
        </View>
        <ScrollView style={styles.wrapper}>
          <KeyboardAvoidingView enabled>
            <InputText
              labelName={TITLES.PlaceholderNama}
              onChangeText={this._setForm('nama')}
              errorText={errors.userName}
              value={userName}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
            />
            <InputText
              labelName={TITLES.PlaceholderAlamat}
              onChangeText={this._setForm('alamat')}
              errorText={errors.alamat}
              value={alamat}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
            />
            <InputText
              labelName={TITLES.PlaceholderTelepon}
              onChangeText={this._setForm('telepon')}
              errorText={errors.telepon}
              value={telepon}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
            />
            <InputText
              labelName={TITLES.PlaceholderEmail}
              onChangeText={this._setForm('email')}
              errorText={errors.email}
              value={email}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
            />
            <InputText
              labelName={TITLES.PlaceholderPassword}
              onChangeText={this._setForm('password')}
              errorText={errors.password}
              value={password}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={() => this._NavigateDaftar()}>
            <Text style={styles.TextStyle}> Daftar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerButtonView}>
          <Text style={styles.sectionTitle}>Sudah punya akun? </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._NavigateMasuk()}>
            <Text style={styles.TextDaftarStyle}> Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bantuanWrapper}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._NavigateMasuk()}>
            <Text style={styles.TextDaftarStyle}> Bantuan </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
