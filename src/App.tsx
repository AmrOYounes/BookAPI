import React from 'react';
import logo from './logo.svg';
import PersistentDrawerLeft from './Components/drawer/PersistentDrawer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import './App.css';

const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <PersistentDrawerLeft/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
