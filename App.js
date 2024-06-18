import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = ()=>{
    return(
        <WebView
        source={{ uri: 'https://mythomane520.github.io/PoeWebView/index.html' }} style={{ flex: 1 }}></WebView>
        //  source={{ uri: 'https://www.youtube.com/' }} style={{ flex: 1 }}></WebView>
    )
}

export default App;