import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Header from "./components/Header"
import UserDetail from "./components/UserDetail"
import store from './stores';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Main exact path="/" component={Main} />
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App;