
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Image, Header, Menu, NavLink} from 'semantic-ui-react';
import './SideNav.css';

const SideNav = (props) => {
  const history = useHistory();

  const handleItemClick = (event) => {
    //todo not right but functionak
    history.push(event.target.innerText)
  }

  return (
    <div id="sidenav" class="ui secondary vertical pointing menu">
        <div class="header item">Your Identity Cloud</div>
        <Menu.Item 
            to='/okta'
            name='okta'
            active={props.activeItem === 'okta'}
            onClick={handleItemClick}
            >
            Okta
        </Menu.Item>
        <Menu.Item 
            to='/auth0'
            name='auth0'
            active={props.activeItem === 'auth0'}
            onClick={handleItemClick}
            >
            Auth0
        </Menu.Item>
        <Menu.Item 
            to='/workflows'
            name='workflows'
            active={props.activeItem === 'workflows'}
            onClick={handleItemClick}
            >
            Workflows
        </Menu.Item>
        <Menu.Item 
            to='/asa'
            name='ASA'
            active={props.activeItem === 'asa'}
            onClick={handleItemClick}
            >
            ASA
        </Menu.Item>
        <Menu.Item 
            to='/oag'
            name='OAG'
            active={props.activeItem === 'OAG'}
            onClick={handleItemClick}
            >
            OAG
        </Menu.Item>
    </div>
  );
};
export default SideNav;