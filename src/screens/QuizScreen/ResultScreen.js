import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

export default class ResultScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.correct = 0;
    this.total = 0;
    Object.keys(this.props.route.params).forEach(key => {
      this.total++;
      if(this.props.route.params[key].correct) this.correct++;
    });
  }

  exit = () => this.props.navigation.navigate('Quiz');


  render() {
    return (
      <Layout>
        <Image
          source={require('../../../assets/patronQuiz.png')}
          style={styles.quizImageBackground}
        />
        <View style={[styles.box, {backgroundColor: '#3D348B', paddingVertical: 40, paddingHorizontal: 20}]}>
          <Text style={[styles.text, styles.fontSizeXbig, styles.fontWeightBold, {textAlign: 'center', color: '#FFF'}]}>{this.correct + '/' + this.total}</Text>
          <Text style={[styles.text, styles.fontWeightSemiBold, {textAlign: 'center', color: '#FFF', marginTop: 5}]}>{I18n.t('respuestasCorrectas')}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', height: 160}}>
          <Text style={styles.text}>{I18n.t('gracias')}</Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={this.exit}
            style={[styles.box, {width: '100%', flexDirection: 'row', paddingVertical: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3D348B'}]}>
            <Text style={[styles.text, styles.fontSizeBig, styles.fontWeightSemiBold, {color: '#FFFFFF'}]}>{I18n.t('salir')}</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    );
  }
}
