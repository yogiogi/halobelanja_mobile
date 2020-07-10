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
import InputText from '../../components/AuthComponent/InputText';

import {isNumber} from '../../constants/validator';
import {Images} from '../../assets';
import styles from './styles';

type State = {
  pemilik: String,
  namaBank: String,
  rekening: String,
};

const TITLES: Object = {
  title: 'Halo Belanja',
  subTitle: 'Untung Sebelum Belanja',
  Information: 'Lengkapi rekening bank',
  PlaceholderPemilik: 'Nama Pemilik',
  PlaceholderBank: 'Nama Bank',
  PlaceholderRekening: 'Nomor Rekening',
  Password: 'Kata Sandi',
};

export class RegisterDataBankScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      pemilik: '',
      namaBank: '',
      rekening: '',
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
    const {pemilik, namaBank, rekening} = this.state;
    let errorEmail = null;
    let submitFormVisible = false;

    if (pemilik && namaBank && rekening) {
      submitFormVisible = false;
    }

    if (isNumber(rekening)) {
      errorEmail = 'Format salah, mohon masukkan nilai yang benar!';
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

  _handleSubmitButton = () => {
    setLoading(true);
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
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  render() {
    const {
      pemilik,
      namaBank,
      rekening,
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
        <View style={styles.wrapper}>
          <InputText
            labelName={TITLES.PlaceholderPemilik}
            onChangeText={this._setForm('pemilik')}
            value={pemilik}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
            maxLength={this.state.loginTeleponMaxLength}
          />
          <InputText
            labelName={TITLES.PlaceholderBank}
            onChangeText={this._setForm('namaBank')}
            value={namaBank}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
            maxLength={this.state.loginTeleponMaxLength}
          />
          <InputText
            labelName={TITLES.PlaceholderRekening}
            onChangeText={this._setForm('rekening')}
            value={rekening}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
            maxLength={this.state.loginTeleponMaxLength}
          />
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            // onPress={  }
          >
            <Text style={styles.TextStyle}> Simpan </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterDataBankScreen;
