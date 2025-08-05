import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles, { paddingScreens } from '../../../styles';
import Layout from '../../../components/Layout/Layout.component';
import I18n from '../../../i18n';
import Modal from 'react-native-modal';


export default class Q10Screen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.route.params?.q10?.selected,
      showModal: false,
    }
  }

  toggleModal = () => this.setState({showModal: !this.state.showModal});
  goBack = () => this.props.navigation.navigate('Q9', {...this.props.route.params,
    q10: {
      selected: this.state.selected,
      correct: this.state.selected ? this.answers[this.state.selected -1].correct : false,
    }
  });
  next = () => this.props.navigation.navigate('Result', {...this.props.route.params,
    q10: {
      selected: this.state.selected,
      correct: this.state.selected ? this.answers[this.state.selected -1].correct : false,
    }
  });
  cancel = () => this.props.navigation.navigate('Quiz');

  answers = [
    {
      id: 1,
      text: I18n.t('quiz10_a1'),
      correct: true
    },
    {
      id: 2,
      text: I18n.t('quiz10_a2'),
    },
  ]

  render() {
    return (
      <Layout
        layoutStyle={{paddingHorizontal: 0}}
        onPressPrevious={this.goBack}
        previousText={I18n.t('anterior')}
        onPressCancel={this.toggleModal}
        cancelText={I18n.t('cancelar')}>
        <Image
          source={require('../../../../assets/patronQuiz.png')}
          style={styles.quizImageBackground}
        />
        <View style={{paddingHorizontal: paddingScreens}}>
          <View style={[styles.box, {backgroundColor: '#3D348B', paddingVertical: 40, paddingHorizontal: 20}]}>
            <Text style={[styles.text, styles.fontWeightBold, {textAlign: 'center', color: '#FFF'}]}>{I18n.t('quiz10_p')}</Text>
          </View>
          <View style={{marginTop: 30}}>
            {this.answers.map(answer => 
              <TouchableOpacity
                onPress={() => !this.state.selected && this.setState({selected: answer.id})}
                style={[
                  styles.box,
                  styles.listItem,
                  this.state.selected && this.state.selected !== answer.id && answer.correct && {borderColor: '#13BF00', borderWidth: 2, marginVertical: 13, paddingHorizontal: 13},
                  this.state.selected === answer.id && {borderColor: answer.correct ? '#13BF00' : '#E80000', borderWidth: 2, marginVertical: 13, paddingHorizontal: 13},
                ]} key={answer.id}>
                <Text style={styles.text}>{answer.text}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{alignItems: 'center', paddingTop: 30}}>
            <TouchableOpacity
              onPress={this.next}
              disabled={!this.state.selected}
              style={{padding: 15}}>
              <Text style={[styles.text, styles.fontWeightSemiBold]}>{ this.state.selected ? I18n.t('finalizar') : I18n.t('contesta')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', }}>
          <View style={{alignItems: 'flex-end', marginBottom: 12, marginRight: paddingScreens}}>
            <Text style={[styles.text, styles.fontSizeXsmall, styles.fontWeightSemiBold]}>10/10</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{flex: 1, backgroundColor: '#3D348B', height: 10}}></View>
          </View>
        </View>
        <Modal
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          isVisible={this.state.showModal}
          onBackButtonPress={this.toggleModal}
          onBackdropPress={this.toggleModal}
          useNativeDriver={true}
          useNativeDriverForBackdrop={true}>
          <View style={styles.modal}> 
            <Text style={[styles.text, styles.fontWeightBold, {padding: 35, textAlign: 'center'}]}>{I18n.t('cancelarConfirm')}</Text>
            <View style={{flexDirection:'row', borderTopWidth: 0.5, borderColor: '#3D348B'}}>
              <TouchableOpacity onPress={this.toggleModal} style={{flex: 1, paddingVertical: 15}}>
                <Text style={[styles.text, styles.fontWeightBold, styles.fontSizeSmall, {textAlign: 'center'}]}>No</Text>
              </TouchableOpacity>
              <View style={{width: 0.5, backgroundColor: '#3D348B'}} />
              <TouchableOpacity onPress={this.cancel} style={{flex: 1, paddingVertical: 15}}>
                <Text style={[styles.text, styles.fontWeightBold, styles.fontSizeSmall, {textAlign: 'center'}]}>{I18n.t('siCancelar')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Layout>
    );
  }
}

