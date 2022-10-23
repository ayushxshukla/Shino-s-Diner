import React from 'react';
import {images} from "../../constants"
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's words"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
          Cookery is naturally the most ancient of the arts, as of all arts it is the most important.
          </p>
        </div>
          <p className='p__opensans'>I want to protect that kind of art for people who treat themselves to my food.</p>
          </div>
        <div className='app__chef-sign'>
          <p>Kojirō Shinomiya</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  
);

export default Chef;
