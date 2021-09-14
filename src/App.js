import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config';
import Home from './Home';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <SecureRoute path="/" exact component={Home} />
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