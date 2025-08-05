import React from 'react';
import QuizScreenTemplate from './QuizScreen.template';

export default class QuizScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();
  start = () => this.props.navigation.navigate('Q1');

  render() {
    return (
      <QuizScreenTemplate
        goBack={this.goBack}
        start={this.start}
      />
    );
  }
}
