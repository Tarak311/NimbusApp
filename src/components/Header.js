import React from 'react';
import Proptypes from 'proptypes';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: Proptypes.string
};

export default Header;
