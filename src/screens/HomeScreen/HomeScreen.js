import React from 'react';
import HomeScreenTemplate from './HomeScreen.template';
import RNBootSplash from 'react-native-bootsplash';
import {setLocale} from '../../i18n';

export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    RNBootSplash.hide({fade: true});
  }

  changeLanguage = locale => {
    setLocale(locale);
    this.setState({locale});
  };

  navigate = screen => this.props.navigation.navigate(screen);

  render() {
    return (
      <HomeScreenTemplate
        changeLanguage={this.changeLanguage}
        navigate={this.navigate}
      />
    );
  }
}
