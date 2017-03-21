import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="NHL X Stats" showMenuIconButton={false}
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    </div>
  </MuiThemeProvider>
);

export default App;
