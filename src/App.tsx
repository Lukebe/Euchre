import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavComponent from './components/nav.component';
import HomeComponent from './components/home.component';
import { LoginComponent } from './components/login.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EulaComponent } from './components/eula.component';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/login" component={LoginComponent}/>
          <Route path="/eula" component={EulaComponent}/>
          <Route component={HomeComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
