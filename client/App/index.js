import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  wrapper: {
    background: 'lightgrey',
    height: '100vh'
  }
};

export default ({children}) => (
  <MuiThemeProvider>
    <div style={style.wrapper}>{children}</div>
  </MuiThemeProvider>
);