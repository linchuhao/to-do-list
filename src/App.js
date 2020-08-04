import React from 'react';
import './App.css';
import Page from './components/Page'
import DoneList from './components/DoneList'
import { HashRouter,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <HashRouter>
        <Route exact path="/" component={Page} />
        <Route path="/finish" component={DoneList}/>
      </HashRouter>
    </div>
  );
}

export default App;
