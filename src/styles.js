import { StyleSheet, Dimensions } from 'react-native';

export const paddingScreens = 20;
export const backgroundColorScreens = '#FFFFFF';

export default StyleSheet.create({
  viewContent: {
    flex: 1,
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.15,
    elevation: 3,
  },
  listItem: {
    marginVertical: 15,
    padding: 15,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width:'85%',
    alignSelf:'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
  buttonLight: {
    backgroundColor: 'rgba(167, 190, 255, 0.5)',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    textAlign: 'left',
    width: '100%',
    borderRadius: 15,
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    backgroundColor: 'rgba(167, 190, 255, 0.5)',
  },
  quizImageBackground: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    opacity: 0.6,
  },
  text: {
    color: '#3D348B',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
  textLineHeight: {
    lineHeight: 26,
  },
  fontSizeXsmall: {
    fontSize: 13,
  },
  fontSizeSmall: {
    fontSize: 15,
  },
  fontSizeBig: {
    fontSize: 20,
  },
  fontSizeXbig: {
    fontSize: 26,
  },
  fontWeightBold: {
    fontFamily: 'Nunito-Bold',
  },
  fontWeightSemiBold: {
    fontFamily: 'Nunito-SemiBold',
  },
  textColorGray: {
    color: '#707070',
  }
});
