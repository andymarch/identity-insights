import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config';
import Home from './Home';
import Okta from './Okta'
import Auth0 from './Auth0';
import Workflows from './Workflows';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <SecureRoute path="/" exact component={Home}/>
        <SecureRoute path="/okta" exact component={Okta}/>
        <SecureRoute path="/auth0" exact component={Auth0}/>
        <SecureRoute path="/workflows" exact component={Workflows}/>
        <Route 
          path="/login/callback"
          component={LoginCallback} 
          errorComponent={() => {
            const id = setTimeout(() => {
              localStorage.clear()
              window.location = '/'
            }, 2000);
            oktaAuth.signOut().then(() => {
              clearTimeout(id);
            });
            return null;
          }}
        />
      </Switch>
    </Security>
  );
};

export default App;