import React from 'react';
import {MuiThemeProvider} from 'material-ui';

const style = {
  wrapper: {
    background: '#E8E8E8',
    // height: '100vh',
    direction: 'rtl',
    display: 'flex'
  }
};

export default ({children}) => (
  <MuiThemeProvider>
    <div style={style.wrapper}>{children}</div>
  </MuiThemeProvider>
);