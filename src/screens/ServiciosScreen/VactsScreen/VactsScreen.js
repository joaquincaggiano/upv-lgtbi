import React from 'react';
import { Linking } from 'react-native';
import VactsScreenTemplate from './VactsScreen.template';

export default class VactsScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => Linking.openURL('https://www.upv.es/entidades/VACTS/index-es.html');

  render() {
    return (
      <VactsScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
      />
    );
  }
}
