import React from 'react';
import { Linking } from 'react-native';
import PublicacionScreenTemplate from './PublicacionScreen.template';

const RIUNET_VACTS_URL = 'https://m.riunet.upv.es/handle/10251/116916';
const EQUALITY_UNIT_EMAIL = 'igualdad@upv.es';

export default class PublicacionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => Linking.openURL(this.props.route.params.url);
  openRiunetVacts = () => Linking.openURL(RIUNET_VACTS_URL);
  openMail = () => Linking.openURL('mailto:' + EQUALITY_UNIT_EMAIL);

  render() {
    return (
      <PublicacionScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
        pub={this.props.route.params}
        openRiunetVacts={this.openRiunetVacts}
        openMail={this.openMail}
        EQUALITY_UNIT_EMAIL={EQUALITY_UNIT_EMAIL}
      />
    );
  }
}
