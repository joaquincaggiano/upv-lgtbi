import React from 'react';
import { Text, TouchableOpacity, Image, Linking, View } from 'react-native';
import styles from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

const ServiciosScreenTemplate = props => {
  const { goBack, navigate } = props;

  const Box = props => (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.box,
        styles.listItem,
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}
    >
      <Image source={props.src} style={props.imageStyle} />
      <Text
        style={[
          styles.text,
          styles.fontSizeBig,
          styles.fontWeightSemiBold,
          { paddingLeft: 12 },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Layout
      onPressBack={goBack}
      title={I18n.t('serviciosTitle')}
      scrollView={false}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Box
            src={require('../../../assets/servicios/vacts.png')}
            imageStyle={{ width: 34, height: 26.18 }}
            text={I18n.t('vactsTitle')}
            onPress={navigate.bind(undefined, 'VACTS')}
          />
          <Box
            src={require('../../../assets/servicios/unidadIgualdad.png')}
            imageStyle={{ width: 33, height: 20.07 }}
            text={I18n.t('unidadIgTitle')}
            onPress={navigate.bind(undefined, 'UnidadIg')}
          />
          <Box
            src={require('../../../assets/servicios/gopu.png')}
            imageStyle={{ width: 30, height: 30 }}
            text={I18n.t('gopuTitle')}
            onPress={navigate.bind(undefined, 'GOPU')}
          />
          <Box
            src={require('../../../assets/servicios/centroMedico.png')}
            imageStyle={{ width: 32, height: 32 }}
            text={I18n.t('centroMedicoTitle')}
            onPress={navigate.bind(undefined, 'CentroMedico')}
          />
        </View>

        <View style={{ paddingBottom: 20 }}>
          <Text
            style={[
              styles.text,
              { textAlign: 'center', textDecorationLine: 'underline' },
            ]}
            onPress={() => Linking.openURL(I18n.t('linkNormativa'))}
          >
            {I18n.t('normativaText')}
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default ServiciosScreenTemplate;
