import React from 'react';
import { Linking } from 'react-native';
import DiversaScreenTemplate from './DiversaScreen.template';

export default class DiversaScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => Linking.openURL('https://diversa.webs.upv.es/');

  render() {
    return (
      <DiversaScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
      />
    );
  }
}
