import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Shino's was introduced to gourmands in 2014, Paris. Counted among the top modern French restaurants, Shino's is the birthplace of “Quiche De Légumes Oubliés.” With the aim to foster the revered legacy of French food, Shino's has recently expanded its culinary presence in Japan in Tokyo's Ginza Corridor district.</p>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Upon arrival in France, Kojirō immediately set off to work to make a name for himself. He emerged out of his slump and the people of France began to revere him as a French Cuisine genius. After many years of hard work, Kojirō was awarded the Pluspol award and then he birthed Shino's</p>
        <a href="https://shokugekinosoma.fandom.com/wiki/Kojir%C5%8D_Shinomiya"><button type="button" className="custom__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;