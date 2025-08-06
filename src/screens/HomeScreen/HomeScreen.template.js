/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, Linking } from 'react-native';
import styles, { paddingScreens } from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

const HomeScreenTemplate = props => {
  const { changeLanguage, navigate } = props;
  const [showLangSelector, setShowLangSelector] = React.useState(false);
  const lang = I18n.locale;
  const marginBetweenBoxes = paddingScreens + 2;

  const changeLanguageHandler = newLang => {
    setShowLangSelector(false);
    changeLanguage(newLang);
  };

  return (
    <Layout header={false}>
      <StatusBar
        animated={true}
        backgroundColor={'#FFF'}
        barStyle={'dark-content'}
      />

      <View
        style={{
          height: 48,
          flexDirection: 'row',
          paddingVertical: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={{ width: 124, height: 28.47 }}
          source={require('../../../assets/icon.png')}
        />
        <View style={{ marginRight: 6 }}>
          <TouchableOpacity
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={setShowLangSelector.bind(undefined, !showLangSelector)}
          >
            <Text
              style={[
                styles.text,
                styles.fontSizeXsmall,
                styles.fontWeightBold,
              ]}
            >
              {I18n.t('lang')}
            </Text>
            <Image
              style={{
                marginLeft: 8,
                width: 8,
                height: 12.7,
                transform: [{ rotate: '270deg' }],
              }}
              source={require('../../../assets/icons/back.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showLangSelector && (
        <View
          style={[
            styles.box,
            {
              position: 'absolute',
              right: paddingScreens,
              top: 60,
              paddingHorizontal: 12,
              paddingVertical: 8,
              zIndex: 100,
            },
          ]}
        >
          {lang !== 'ca' && (
            <TouchableOpacity
              onPress={changeLanguageHandler.bind(undefined, 'ca')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 4,
              }}
            >
              <Text
                style={[
                  styles.text,
                  styles.fontSizeSmall,
                  styles.fontWeightSemiBold,
                ]}
              >
                VAL
              </Text>
            </TouchableOpacity>
          )}
          {lang !== 'es' && (
            <TouchableOpacity
              onPress={changeLanguageHandler.bind(undefined, 'es')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 4,
              }}
            >
              <Text
                style={[
                  styles.text,
                  styles.fontSizeSmall,
                  styles.fontWeightSemiBold,
                ]}
              >
                CAS
              </Text>
            </TouchableOpacity>
          )}
          {lang !== 'en' && (
            <TouchableOpacity
              onPress={changeLanguageHandler.bind(undefined, 'en')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 4,
              }}
            >
              <Text
                style={[
                  styles.text,
                  styles.fontSizeSmall,
                  styles.fontWeightSemiBold,
                ]}
              >
                ENG
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <View style={{ paddingBottom: 40, paddingTop: 30, alignItems: 'center' }}>
        <Text
          style={[
            styles.text,
            styles.fontSizeXbig,
            styles.fontWeightBold,
            { color: '#F7B801' },
          ]}
        >
          {I18n.t('homeTitle')}
        </Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Box
            src={require('../../../assets/home/orienta.png')}
            imageStyle={{ width: 79, height: 80 }}
            boxStyle={{ marginRight: marginBetweenBoxes }}
            text={I18n.t('orientaTitle')}
            onPress={navigate.bind(undefined, 'Orienta')}
          />
          <Box
            src={require('../../../assets/home/servicios.png')}
            imageStyle={{ width: 67, height: 67 }}
            text={I18n.t('serviciosTitle')}
            onPress={navigate.bind(undefined, 'Servicios')}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: marginBetweenBoxes }}>
          <Box
            src={require('../../../assets/home/diversa.png')}
            imageStyle={{ width: 73, height: 65.25 }}
            boxStyle={{ marginRight: marginBetweenBoxes }}
            text={I18n.t('diversaTitle')}
            onPress={navigate.bind(undefined, 'Diversa')}
          />
          <Box
            src={require('../../../assets/home/vocabulario.png')}
            imageStyle={{ width: 68, height: 77.04 }}
            text={I18n.t('vocabularioTitle')}
            onPress={navigate.bind(undefined, 'Vocabulario')}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: marginBetweenBoxes }}>
          <Box
            src={require('../../../assets/home/riunetLGTBI.png')}
            imageStyle={{ width: 67, height: 45 }}
            boxStyle={{ marginRight: marginBetweenBoxes }}
            text={I18n.t('riuNetTitle')}
            onPress={() => Linking.openURL(I18n.t('riunetLink'))}
            // onPress={navigate.bind(undefined, 'RiuNet')}
          />
          <Box
            src={require('../../../assets/home/quiz.png')}
            imageStyle={{ width: 70, height: 61 }}
            text={I18n.t('quizTitle')}
            onPress={navigate.bind(undefined, 'Quiz')}
          />
        </View>
      </View>
      <View style={{ paddingBottom: 30, paddingTop: 55, alignItems: 'center' }}>
        <Image
          style={{
            width: 177,
            height: 63,
            resizeMode: 'contain',
          }}
          source={require('../../../assets/home/upv.png')}
        />
      </View>
    </Layout>
  );
};

const Box = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[
      styles.box,
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        padding: 10,
      },
      props.boxStyle,
    ]}
  >
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image source={props.src} style={props.imageStyle} />
    </View>
    <Text
      style={[
        styles.text,
        styles.fontSizeBig,
        styles.fontWeightSemiBold,
        { textAlign: 'center' },
      ]}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HomeScreenTemplate;
