import React from 'react';
import { View, TouchableOpacity, Linking, Text, ActivityIndicator } from 'react-native';
import styles from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import Map from '../../../components/Map/Map.component';
import I18n from '../../../i18n';

const CentroMedicoScreenTemplate = props => {
  const {
    goBack,
    setLoading,
    loading,
  } = props;

  return (
    <Layout
      layoutStyle={{paddingBottom: 25}}
      onPressBack={goBack}
      title={I18n.t('centroMedicoTitle')}>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.text, styles.textColorGray, {textAlign: 'center'}]}>{I18n.t('centroMedicoText1')}</Text>
        <TouchableOpacity 
          style={{height: 48, paddingTop: 5}}
          onPress={() => Linking.openURL('tel:963877407')}>
          <Text style={styles.text}>963 877 407</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 5}}>
        <Text style={[styles.text, styles.textColorGray]}>{I18n.t('centroMedicoText2')}</Text>
        <TouchableOpacity
          style={{height: 48, paddingTop: 5}}
          onPress={() => Linking.openURL('mailto:medico@upvnet.upv.es')}>
          <Text style={styles.text}>medico@upvnet.upv.es</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 30}}>
        <Text style={[styles.text, styles.textColorGray, {textAlign: 'center'}]}>{I18n.t('centroMedicoText3')}</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: loading ? 1 : 0}}>
          <ActivityIndicator size="large" color="#707070" />
        </View>
        <Map
          onLoadEnd={setLoading.bind(undefined, false)}
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.8671194740834!2d-0.3415078857682146!3d39.47953283055129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604886bf8f03e3%3A0x6d5fe72fee3fc871!2sCentre%20de%20Salut%20Laboral%20Juana%20Portaceli!5e0!3m2!1ses!2ses!4v1634896089197!5m2!1ses!2ses'}
        />
      </View>
    </Layout>
  );
};


export default CentroMedicoScreenTemplate;
