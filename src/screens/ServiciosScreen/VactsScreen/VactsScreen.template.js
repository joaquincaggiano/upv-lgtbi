import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import I18n from '../../../i18n';

const VactsScreenTemplate = props => {
  const {
    goBack,
    openLink,
  } = props;

  return (
    <Layout
      onPressBack={goBack}
      title={I18n.t('vactsTitle')}>
      <Text style={[styles.text, styles.fontSizeSmall, styles.textColorGray, styles.fontWeightBold, {lineHeight: 23, textAlign: 'center', paddingHorizontal: 25, paddingBottom: 50}]}>
        {I18n.t('vactsSubtitle')}
      </Text>
      <Text style={[styles.text, styles.fontSizeSmall, styles.textColorGray, {lineHeight: 23}]}>{I18n.t('vactsText')}</Text>
      <View style={{flex: 1, justifyContent: 'center', paddingVertical: 40}}>
        <TouchableOpacity
          onPress={openLink}
          style={[styles.box, {width: '100%', flexDirection: 'row', paddingVertical: 25, alignItems: 'center', justifyContent: 'center'}]}>
          <Image style={{width: 23, height: 32.47}} source={require('../../../../assets/icons/web.png')} />
          <Text style={[styles.text, styles.fontSizeBig, styles.textColorGray, styles.fontWeightSemiBold, {paddingLeft: 10}]}>{I18n.t('visitWeb')}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};



export default VactsScreenTemplate;
