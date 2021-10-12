import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createStore} from 'redux'
import { Provider } from "react-redux";
import reducer from './store/reducer'
import Seagrove from "./component/Seagrove";
import BaseLayoutProperty from "./component/PropertyBaseLayout";

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const token=localStorage.getItem('jsonwebtoken')
if(token){
  store.dispatch({type:'ON_LOGIN'})
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <BaseLayoutProperty>
          <Route path='/30A-Seagrove-Beach' component={Seagrove}/>
        </BaseLayoutProperty>
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
