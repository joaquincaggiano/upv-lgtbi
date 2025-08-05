import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking, ActivityIndicator } from 'react-native';
import styles from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import Map from '../../../components/Map/Map.component';
import I18n from '../../../i18n';

const UnidadIgScreenTemplate = props => {
  const {
    goBack,
    openLink,
    setLoading,
    loading,
  } = props;

  return (
    <Layout
      onPressBack={goBack}
      title={I18n.t('unidadIgTitle')}>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.text, styles.textColorGray]}>{I18n.t('unidadIgText1')}</Text>
        <TouchableOpacity 
          style={{height: 48, paddingTop: 5}}
          onPress={() => Linking.openURL('mailto:igualdad@upv.es')}>
          <Text style={styles.text}>igualdad@upv.es</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 35, paddingTop: 10}}>
        <Text style={[styles.text, styles.textColorGray, {textAlign: 'center'}]}>{I18n.t('unidadIgText2')}</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: loading ? 1 : 0}}>
          <ActivityIndicator size="large" color="#707070" />
        </View>
        <Map
          onLoadEnd={setLoading.bind(undefined, false)}
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.0809613428044!2d-0.3454621142647345!3d39.483117745407434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzU5LjQiTiAwwrAyMCc0My44Ilc!5e0!3m2!1ses!2ses!4v1634902270422!5m2!1ses!2ses'}
        />
      </View>
      <View style={{justifyContent: 'center', paddingVertical: 35}}>
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


export default UnidadIgScreenTemplate;
