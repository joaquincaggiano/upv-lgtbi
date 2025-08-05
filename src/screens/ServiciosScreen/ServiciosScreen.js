import React from 'react';
import ServiciosScreenTemplate from './ServiciosScreen.template';

export default class ServiciosScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  navigate = screen => this.props.navigation.navigate(screen);

  render() {
    return (
      <ServiciosScreenTemplate
        goBack={this.goBack}
        navigate={this.navigate}
      />
    );
  }
}
