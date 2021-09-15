import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Image, Header, Menu, NavLink} from 'semantic-ui-react';
import './SideNav.css';

const SideNav = () => {
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
    <Menu borderless fluid >
        <Menu.Item header as='a' href='/'><Header as='h2' className='brandText appName'>
            <i class="eye icon"></i> Identity Insight
        </Header></Menu.Item>
        <Menu.Item fluid>
        </Menu.Item>
        {authState.isAuthenticated && (
            <Menu.Item position='right' id="logout" onClick={logout}>Logout</Menu.Item>
            )}
            {!authState.isPending && !authState.isAuthenticated && (
            <Menu.Item position='right' id="logout" onClick={login}>Login</Menu.Item>
            )}
    </Menu>
  );
};
export default SideNav;