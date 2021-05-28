import React from 'react';

import './App.css';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <ToolBar>
          <Typography variant="h6" color="inherit">
            CarList
          </Typography>
        </ToolBar>
      </AppBar>
      <Login />
    </div>
  );
}

export default App;
