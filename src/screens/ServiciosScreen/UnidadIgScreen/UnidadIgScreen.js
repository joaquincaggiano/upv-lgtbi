import React from 'react';
import {Linking} from 'react-native';
import UnidadIgScreenTemplate from './UnidadIgScreen.template';
import I18n from '../../../i18n';

export default class UnidadIgScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true,
    // };
  }

  goBack = () => this.props.navigation.goBack();
  openLink = () => {
    const lang = I18n.locale === 'ca' ? 'va' : I18n.locale;
    Linking.openURL('https://www.upv.es/entidades/UI/index-' + lang + '.html');
  };

  // setLoading = loading => setTimeout(() => this.setState({loading}), 250);

  render() {
    return (
      <UnidadIgScreenTemplate
        goBack={this.goBack}
        openLink={this.openLink}
        // loading={this.state.loading}
        // setLoading={this.setLoading}
      />
    );
  }
}
