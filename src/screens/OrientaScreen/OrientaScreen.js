import React from 'react';
import { Linking } from 'react-native';
import OrientaScreenTemplate from './OrientaScreen.template';

export default class OrientaScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => Linking.openURL('https://inclusio.gva.es/es/web/igualdad-diversidad/orienta');

  render() {
    return (
      <OrientaScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
      />
    );
  }
}
