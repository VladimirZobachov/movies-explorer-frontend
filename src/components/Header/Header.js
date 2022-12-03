import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn, handleOpenPopup }) {
  return (loggedIn ? <Navigation handleOpenPopup={handleOpenPopup}/> : <NavTab />);
}
export default Header;
