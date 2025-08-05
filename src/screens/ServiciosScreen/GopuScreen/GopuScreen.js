import React from 'react';
import { Linking } from 'react-native';
import GopuScreenTemplate from './GopuScreen.template';

export default class GopuScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => Linking.openURL('https://www.upv.es/entidades/ICE/info/1046036normalc.html');

  render() {
    return (
      <GopuScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
      />
    );
  }
}
