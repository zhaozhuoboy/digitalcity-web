import React, { PropTypes } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

class Header extends React.Component {
  render () {
    return(
      <div>
        <TopBar />
        <NavBar />
      </div>
    )
  }
}

export default Header;
