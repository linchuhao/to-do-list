import React from 'react';
import './App.css';
import Page from './components/Page'
import { HashRouter,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <HashRouter>
        <Route exact path="/" component={Page} />
        <Route path="/finish" />
      </HashRouter>
    </div>
  );
}

export default App;
