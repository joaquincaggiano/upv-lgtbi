import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import styles from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import I18n from '../../../i18n';

const UnidadIgScreenTemplate = props => {
  const { goBack, openLink } = props;

  return (
    <Layout onPressBack={goBack} title={I18n.t('unidadIgTitle')}>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.text, styles.textColorGray]}>
          {I18n.t('unidadIgText1')}
        </Text>
        <TouchableOpacity
          style={{ height: 48, paddingTop: 5 }}
          onPress={() => Linking.openURL('mailto:igualdad@upv.es')}
        >
          <Text style={styles.text}>igualdad@upv.es</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', paddingBottom: 35, paddingTop: 10 }}>
        <Text
          style={[styles.text, styles.textColorGray, { textAlign: 'center' }]}
        >
          {I18n.t('unidadIgText2')}
        </Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
        <Image
          source={require('../../../../assets/mapa-4e.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 35 }}>
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
          ]}
        >
          <Image
            style={{ width: 23, height: 32.47 }}
            source={require('../../../../assets/icons/web.png')}
          />
          <Text
            style={[
              styles.text,
              styles.fontSizeBig,
              styles.textColorGray,
              styles.fontWeightSemiBold,
              { paddingLeft: 10 },
            ]}
          >
            {I18n.t('visitWeb')}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default UnidadIgScreenTemplate;
