import React from 'react';
import CentroMedicoScreenTemplate from './CentroMedicoScreen.template';

export default class CentroMedicoScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  goBack = () => this.props.navigation.goBack();
  setLoading = loading => setTimeout(() => this.setState({loading}), 250);

  render() {
    return (
      <CentroMedicoScreenTemplate
        goBack={this.goBack}
        loading={this.state.loading}
        setLoading={this.setLoading}
      />
    );
  }
}
