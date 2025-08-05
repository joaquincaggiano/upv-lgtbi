import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles, { paddingScreens } from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

const RiuNetScreenTemplate = props => {
  const {
    goBack,
    navigate,
  } = props;

  const Box = props => <TouchableOpacity
    accessibilityLabel={props.pub.title}
    onPress={navigate.bind(undefined, 'Publicacion', props.pub)}
    style={
      [styles.box, styles.listItem, {
        flexDirection: 'row',
        alignItems: 'center',
      }]}>
    <Image
      source={require('../../../assets/icons/riunet.png')}
      style={{width: 35, height: 27.33, alignSelf: 'flex-start'}} />
    <View style={{flex: 1, paddingLeft: 12}}>
      <Text style={[styles.text, styles.textColorGray]}>{props.pub.title}</Text>
    </View>
  </TouchableOpacity>;

  
  const pubs = [
    {
      id: 1,
      title: I18n.t('pub1Title'),
      description: I18n.t('protocolDescription'),
      url: 'https://m.riunet.upv.es/handle/10251/121575',
      isProtocol: true,
    },
    {
      id: 2,
      title: I18n.t('pub2Title'),
      description: I18n.t('protocolDescription'),
      url: 'https://m.riunet.upv.es/handle/10251/121573',
      isProtocol: true,
    },
    {
      id: 3,
      title: I18n.t('pub3Title'),
      description: I18n.t('pubDescription'),
      url: 'https://m.riunet.upv.es/handle/10251/192861',
      isProtocol: false,
    },
    {
      id: 4,
      title: I18n.t('pub4Title'),
      description: I18n.t('pubDescription'),
      url: 'https://m.riunet.upv.es/handle/10251/181482',
      isProtocol: false,
    },
    {
      id: 5,
      title: I18n.t('pub5Title'),
      description: I18n.t('pubDescription'),
      url: 'https://m.riunet.upv.es/handle/10251/193011',
      isProtocol: false,
    },
  ];

  return (
    <Layout
      layoutStyle={{paddingBottom: paddingScreens}}
      onPressBack={goBack}
      title={I18n.t('riuNetTitle')}>
      <TouchableOpacity onPress={() => Linking.openURL('https://m.riunet.upv.es/handle/10251/116916/browse?type=dateissued')} style={{paddingBottom: 20}}>
        <Text style={[styles.text, styles.fontSizeXsmall, styles.fontWeightSemiBold, {textAlign: 'center'}]}>{I18n.t('riuNetSubtitle')}<Text style={{textDecorationLine: 'underline'}}>RiuNet VACTS</Text></Text>
      </TouchableOpacity>
      { pubs.map(pub => <Box pub={pub} key={pub.id} />)}
    </Layout>
  );
};



export default RiuNetScreenTemplate;
