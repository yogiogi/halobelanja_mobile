import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../assets';

export default StyleSheet.create({
  containerWrapper: {
    backgroundColor: Colors.bgScreen,
    flex: 1,
  },
  column: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  rowSub: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  imageContent: {
    height: Metrics.height.heightFullScreen,
    width: Metrics.width.width100,
    resizeMode: 'contain',
  },
  imageWrapper: {
    alignSelf: 'center',
    height: Metrics.scaleHeight(24),
    width: Metrics.scaleHeight(24),
  },
  titleText: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.header,
    borderRadius: 30,
    width: 120,
  },
  LoginButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.header,
    borderRadius: 10,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  titleWrapper: {
    fontFamily: 'Lulo-Clean-W01-One-Bold',
    fontSize: 25,
    color: Colors.titleText,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: Fonts.type.subTitle,
    fontSize: 20,
    color: Colors.titleText,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  infoTitle: {
    fontSize: 14,
    color: Colors.titleText,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.size.medium,
  },
  TextDaftarStyle: {
    color: Colors.titleText,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
  },
  informationWrapper: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: Colors.listingButton,
    fontFamily: Fonts.type.regular,
    marginLeft: Fonts.size.medium,
  },
  ButtonContainer: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonLoginHelp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ButtonDaftar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    color: Colors.placeholder,
  },
  labelText: {
    color: Colors.placeholder,
    opacity: 0.39,
  },
  inputPasswordBorder: {
    borderColor: Colors.background,
  },
  inputTextBorder: {
    borderColor: Colors.background,
  },
  bantuanWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daftarWrapper: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.placeholder,
    opacity: 0.4,
    fontFamily: Fonts.type.regular,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
});
