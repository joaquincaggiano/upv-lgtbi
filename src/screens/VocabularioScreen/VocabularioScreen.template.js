import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Keyboard, Linking, Image, Platform } from 'react-native';
import styles, { paddingScreens } from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

let flatlist = null, lastFilter = null;

const VocabularioScreenTemplate = props => {
  const {
    goBack,
    vocabulario
  } = props;

  const [openId, setOpen] = useState(null);
  const [filter, setFilter] = useState('');

  const regex = new RegExp(filter.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'gi'),
  vocabularioFiltered = vocabulario.filter(word => word.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(regex));

  if(lastFilter !== filter) {
    //solo cuando se refresca por cambio de filtro, no por abrir o cerrar una word
    flatlist?.scrollToIndex({index: 0, animated: false});
    lastFilter = filter;
  }

  const Word = ({item, index}) => {

    const word = <TouchableOpacity
      onPress={() => {
        setOpen(openId === item.id ? null : item.id);
        Keyboard.dismiss();
      }}
      style={{
        paddingVertical: 10,
        paddingHorizontal: paddingScreens,
        borderBottomWidth: 1.5,
        borderColor: '#E2E0EE',
      }}>
      <Text style={[styles.text, styles.fontSizeBig]}>{item.title}</Text>
      {openId === item.id &&
        <View style={{paddingTop: 15, paddingBottom: 5}}>
          <Text style={[styles.text, styles.fontSizeSmall, styles.textColorGray]}>{item.description}</Text>
        </View>
      }
    </TouchableOpacity>;

    if(index === vocabularioFiltered.length - 1) {
      return <View>
        {word}
        <View style={{paddingVertical: 30, paddingHorizontal: paddingScreens}}>
          <Text style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {color:'#8984B8'}]}>{I18n.t('fuentes')}</Text>
          <Text
            onPress={() => Linking.openURL('https://www.lgbtqiahealtheducation.org/wp-content/uploads/2020/10/Glossary-2020.08.30.pdf')}
            style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {textDecorationLine:'underline', marginTop: 15, color:'#8984B8'}]}>
            Fenway Institute. National LGBT Healt Education Center
          </Text>
          <Text
            onPress={() => Linking.openURL('https://www.mscbs.gob.es/ciudadanos/enfLesiones/enfTransmisibles/sida/docs/GlosarioDiversidad.pdf')}
            style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {textDecorationLine:'underline', marginTop: 15, color:'#8984B8'}]}>
            Ministerio de Sanidad, Servicios Sociales e Igualdad. Glosario de términos sobre diversidad afectivo sexual
          </Text>
          <Text
            onPress={() => Linking.openURL('https://www.boe.es/buscar/pdf/2017/BOE-A-2017-5118-consolidado.pdf')}
            style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {textDecorationLine:'underline', marginTop: 15, color:'#8984B8'}]}>
            Generalitat Valenciana. Ley 8/2017 integral del reconocimiento del derecho a la identidad y a la expresión de género en la Comunitat Valenciana
          </Text>
          <Text
            onPress={() => Linking.openURL('https://www.boe.es/buscar/pdf/2019/BOE-A-2019-281-consolidado.pdf')}
            style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {textDecorationLine:'underline', marginTop: 15, color:'#8984B8'}]}>
            Generalitat Valenciana. Ley 23/2018, de igualdad de las personas LGTBI
          </Text>
        </View>
      </View>;
    } else return word;
  }

  return (
    <Layout
      scrollView={false}
      layoutStyle={{paddingHorizontal: 0}}
      onPressBack={goBack}
      title={I18n.t('vocabularioTitle')}>
      <View style={{paddingHorizontal: paddingScreens, paddingBottom: 20}}>
        <Text onPress={() => flatlist?.scrollToEnd()} style={[styles.text, styles.fontSizeSmall, styles.fontWeightSemiBold, {textAlign: 'center', color:'#8984B8'}]}>{I18n.t('fuentesUbi')}</Text>
        <View style={{marginTop: 20, borderRadius: 10, backgroundColor: '#F5F4F9', flexDirection: 'row', alignItems: 'center', paddingVertical: Platform.OS === 'ios' ? 10 : 0}}>
          <Image style={{width: 20, height: 21.03, marginHorizontal: 10}} source={require('../../../assets/icons/search.png')} />
          <View style={{flex: 1}}>
            <TextInput
              style={[styles.text, styles.fontSizeSmall, styles.fontWeightBold, {color: '#8984B8'}]}
              placeholder={I18n.t('search')}
              placeholderTextColor={'#8984B8'}
              onChangeText={setFilter} />
          </View>
        </View>
      </View>
      { vocabularioFiltered.length > 0 ?
        <View style={{flex: 1}}>
          <FlatList
            ref={ref => flatlist = ref}
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            data={vocabularioFiltered}
            renderItem={Word}>
          </FlatList>
        </View>
      :
      <View style={{padding: paddingScreens}}>
        <Text style={[styles.text, styles.textColorGray]}>{I18n.t('noResults')}</Text>
      </View>
      }
    </Layout>
  );
};



export default VocabularioScreenTemplate;
