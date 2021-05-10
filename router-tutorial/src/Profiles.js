import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: '#FFECB3',
    color: '#201F85',
  };

  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gee">
            gee
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/haa">
            haa
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
