import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

//Redux Logger
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

//Store Configuration Adding Thunk and Logger in Middleware
function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({})

import { Scene, Router, ActionConst } from 'react-native-router-flux';
import Weather from './components/Weather';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoggedIn: true
    };
  };

  render(){
  return (
  <Provider store={store}>
     <Router >
      <Scene key="root">
        <Scene key="welcome" component={Weather} title="The Weather App" type={ActionConst.RESET}  initial />
      </Scene>
    </Router>
    </Provider>
  );
  }
};

export default App;
