import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Divider, Image, Header, Menu, Container} from 'semantic-ui-react';

const Home = () => {
  const {authState, oktaAuth} = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

    const login = async () => oktaAuth.signInWithRedirect();

  const logout = async () => {
    try {
      await oktaAuth.signOut();
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      })
    }
  }, [authState, oktaAuth]);
  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Container fluid>
      <Menu borderless fluid >
        <Menu.Item header as='a' href='/'><Header as='h2' className='brandText appName'>
            <Image src={'./favicon.png'} size='mini'  verticalAlign='middle'  />Identity Insight
          </Header></Menu.Item>
        <Menu.Item fluid>
        </Menu.Item>
        {authState.isAuthenticated && (
              <Menu.Item position='right' onClick={logout}>Logout</Menu.Item>
            )}
            {!authState.isPending && !authState.isAuthenticated && (
              <Menu.Item position='right' onClick={login}>Login</Menu.Item>
            )}
      </Menu>
        <Divider hidden />
    </Container>
  );
};
export default Home;