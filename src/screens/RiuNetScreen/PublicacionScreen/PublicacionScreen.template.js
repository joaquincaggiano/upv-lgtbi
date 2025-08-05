import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import I18n from '../../../i18n';

const PublicacionScreenTemplate = props => {
  const {
    goBack,
    openLink,
    pub,
    openRiunetVacts,
    openMail,
    EQUALITY_UNIT_EMAIL,
  } = props;

  return (
    <Layout onPressBack={goBack} title={I18n.t('riuNetTitle')}>
      {!pub.isProtocol && (
        <View style={{marginTop: 20}}>
          <Text
            style={[
              styles.text,
              styles.textColorGray,
              {lineHeight: 23, textAlign: 'center'},
            ]}>
            {pub.description}{' '}
            <Text
              style={{textDecorationLine: 'underline'}}
              onPress={openRiunetVacts}>
              RiuNet - VACTS
            </Text>
          </Text>
        </View>
      )}

      <View
        style={{paddingHorizontal: 5, paddingTop: pub.isProtocol ? 20 : 60}}>
        <Text
          style={[
            styles.text,
            styles.fontWeightBold,
            styles.textColorGray,
            {lineHeight: 23, textAlign: 'center'},
          ]}>
          {pub.title}
        </Text>
      </View>

      {pub.isProtocol && (
        <View style={{marginTop: 40}}>
          <Text
            style={[
              styles.text,
              styles.textColorGray,
              {lineHeight: 23, textAlign: 'center'},
            ]}>
            {pub.description}{' '}
            <Text style={{textDecorationLine: 'underline'}} onPress={openMail}>
              {EQUALITY_UNIT_EMAIL}
            </Text>
          </Text>

          <Text
            style={[
              styles.text,
              styles.textColorGray,
              {lineHeight: 23, marginTop: 20, textAlign: 'center'},
            ]}>
            {I18n.t('protocolDescription2')}
          </Text>
        </View>
      )}

      <View style={{paddingTop: 30}}>
        <TouchableOpacity
          onPress={openLink}
          style={[
            styles.box,
            {
              width: '100%',
              flexDirection: 'row',
              paddingVertical: 25,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <Image
            style={{width: 35, height: 27.33}}
            source={require('../../../../assets/icons/riunet.png')}
          />
          <Text
            style={[
              styles.text,
              styles.fontSizeBig,
              styles.fontWeightSemiBold,
              styles.textColorGray,
              {paddingLeft: 10},
            ]}>
            {I18n.t('read')}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default PublicacionScreenTemplate;
