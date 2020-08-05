import React from 'react';
import './App.css';
import Page from './components/Page'
import DoneList from './components/DoneList'
import { HashRouter,Route } from 'react-router-dom'
import {Spin} from 'antd';
function App() {
  return (
    <div className="App">
      {/* <Spin spinning="true" tip="loading"> */}
      <HashRouter>
        <Route exact path="/" component={Page} />
        <Route path="/finish" component={DoneList}/>
      </HashRouter>
      {/* </Spin> */}
    </div>
  );
}

export default App;
