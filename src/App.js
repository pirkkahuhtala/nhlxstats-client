import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dashboard from './scenes/Dashboard';

const style = {
  marginBottom: 24
};

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar style={style}
        title="NHL X Stats" showMenuIconButton={false}
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
      <Dashboard />
    </div>
  </MuiThemeProvider>
);

export default App;
