import React from 'react';
import WebView from 'react-native-webview';

const NetworkDisplay = () =>{
    const html = `
    <div style="width:256px;max-width:100%;">
        <div style="height:0;padding-bottom:100%;position:relative;">
            <iframe width="256" height="256" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6qnagj">
            </iframe>
        </div>
            <p>
            <a href="https://imgflip.com/gif/6qnagj">   
                MyMeDear
            </a>
        </p>
    </div>
    `
    return(
        <WebView source={{html: html}} />
    )
}

export default NetworkDisplay;

