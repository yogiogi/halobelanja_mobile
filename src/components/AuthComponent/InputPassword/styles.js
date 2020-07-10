import {StyleSheet} from 'react-native';

import {Colors, Fonts, Metrics} from '../../../assets';

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    borderColor: Colors.placeholder,
  },
  labelStyle: {
    color: Colors.placeholder,
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weight.normal,
    fontFamily: Fonts.type.regular,
  },
  inputFloatingText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.smallMed,
    color: Colors.placeholder,
    textAlign: 'left',
    lineHeight: 24,
    minHeight: 50,
    marginLeft: 5,
  },
  inputPasswordText: {
    color: Colors.background,
  },
  inputError: {
    borderColor: Colors.lostText,
  },
  inputSection: {
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold500,
    fontSize: Fonts.size.extraSmall,
  },
  errorText: {
    fontSize: Fonts.size.small,
    color: Colors.lostText,
    textAlignVertical: 'center',
  },
  showPasswordWrapper: {
    position: 'absolute',
    right: 0,
    top: '45%',
  },
  showPasswordButton: {
    height: 16,
    width: 25,
  },
});
