import React from "react";
import { Provider } from "react-redux";

import './App.css';
import store from './store'

const App = () => {
  console.log("ram122");
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>

  ) 
  
  
};

export default App;
