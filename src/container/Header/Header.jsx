import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Rain or shine" />
      <h1 className="app__header-h1">it’s a fine time to dine.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Situated in 8th arrondissement of Paris, France, Chef Kojirō Shinomiya celebrates contemporary cuisine with French influences. Quince serves nightly-changing tasting menus highlighting the restaurant's unique gourmet. </p>
      <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img target">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;