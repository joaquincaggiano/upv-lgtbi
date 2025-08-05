import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import Layout from '../../components/Layout/Layout.component';
import I18n from '../../i18n';

const QuizScreenTemplate = props => {
  const {
    goBack,
    start,
  } = props;

  return (
    <Layout
      onPressBack={goBack}
      title={I18n.t('quizTitle')}>
      <Image
        source={require('../../../assets/patronQuiz.png')}
        style={styles.quizImageBackground}
      />
      <Text style={[styles.text, {lineHeight: 25, textAlign: 'center'}]}>{I18n.t('quizText')}</Text>
      <View style={{alignItems: 'center', paddingVertical: 50}}>
        <Image style={{width: 154, height: 134.62}} source={require('../../../assets/icons/quiz.png')} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={start}
          style={[styles.box, {width: '100%', flexDirection: 'row', paddingVertical: 25, marginVertical: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3D348B'}]}>
          <Text style={[styles.text, styles.fontSizeBig, styles.fontWeightBold, {color: '#FFFFFF'}]}>{I18n.t('start')}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};


export default QuizScreenTemplate;
