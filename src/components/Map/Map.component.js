import React from 'react';
import { WebView } from 'react-native-webview';

export default class Map extends React.PureComponent {
  render() {
    return (
      <WebView
        onLoadEnd={this.props.onLoadEnd}
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        source={{
          html: `
                <iframe src="${this.props.src}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          `,
        }}
        automaticallyAdjustContentInsets={false}
        scrollEnabled={false}
      />
    );
  }
}
