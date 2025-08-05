import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles, { paddingScreens, backgroundColorScreens } from '../../styles';

export default class Layout extends React.PureComponent {
  render() {
    return (
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={layoutStyle.safeAreaView}>
        { this.props.header !== false &&
          <View style={layoutStyle.header}>
            {this.props.onPressBack && (
              <TouchableOpacity
                accessibilityLabel={'Atrás'}
                onPress={this.props.onPressBack}
                style={layoutStyle.headerLeftContainer}>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={layoutStyle.backImage}
                />
              </TouchableOpacity>
            )}
            { this.props.title != null &&
                <Text style={[styles.text, styles.fontSizeXbig, styles.fontWeightBold]}>{this.props.title}</Text>
            }
            {this.props.onPressPrevious && (
              <TouchableOpacity
                accessibilityLabel={'Anterior'}
                onPress={this.props.onPressPrevious}
                style={layoutStyle.headerLeftContainer}>
                <Text style={styles.text}>
                  {this.props.previousText || ''}
                </Text>
              </TouchableOpacity>
            )}
            {this.props.onPressCancel && (
              <TouchableOpacity
                accessibilityLabel={'Cancelar'}
                onPress={this.props.onPressCancel}
                style={layoutStyle.headerRightContainer}>
                <Text style={styles.text}>
                  {this.props.cancelText || ''}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
        {this.props.scrollView === false ?
          <View style={[layoutStyle.layout, this.props.layoutStyle]}>
            {this.props.children}
          </View>    
        :
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            overScrollMode={'never'}
            contentContainerStyle={[layoutStyle.layout, this.props.layoutStyle]}>
            {this.props.children}
          </ScrollView>
        }
      </SafeAreaView>
    );
  }
}

const layoutStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: backgroundColorScreens,
  },
  layout: {
    flexGrow: 1,
    paddingHorizontal: paddingScreens,
    backgroundColor: backgroundColorScreens,
    paddingTop: paddingScreens,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    width: 15.75,
    height: 25,
  },
  headerLeftContainer: {
    position: 'absolute',
    left: 0,
    paddingLeft: paddingScreens,
    paddingRight: 10,
    height: '100%',
    justifyContent: 'center',
  },
  headerRightContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: paddingScreens,
    paddingLeft: 10,
    height: '100%',
    justifyContent: 'center',
  },
});
