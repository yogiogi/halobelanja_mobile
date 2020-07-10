import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../assets';

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 15,
    borderColor: Colors.underLogin,
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
    color: Colors.inputText,
    textAlign: 'left',
    lineHeight: 24,
    minHeight: 48,
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
});
