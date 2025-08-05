import React from 'react';
import RiuNetScreenTemplate from './RiuNetScreen.template';

export default class RiuNetScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  navigate = (screen, params) => this.props.navigation.navigate(screen, params);

  render() {
    return (
      <RiuNetScreenTemplate
        goBack={this.goBack}
        navigate={this.navigate}
      />
    );
  }
}
