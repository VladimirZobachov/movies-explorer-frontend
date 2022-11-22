import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn }) {
  return (loggedIn ? <Navigation /> : <NavTab />);
}
export default Header;
