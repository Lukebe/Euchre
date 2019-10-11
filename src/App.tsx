import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavComponent from './components/nav.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { SelectMembershipComponent } from './components/selectMembership.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EulaComponent } from './components/eula.component';
import { PayPalComponent } from './components/paypal.component';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/login" component={LoginComponent}/>
          <Route path="/eula" component={EulaComponent}/>
          <Route path="/membership" component={SelectMembershipComponent}/>
          <Route path="/paypal" component={PayPalComponent}/>
          <Route component={HomeComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
