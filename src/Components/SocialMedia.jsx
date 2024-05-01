/* eslint-disable no-unused-vars */
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/ange-cesar-madick-88b665281' target='_blanc'><BsLinkedin/></a>
    </div>
    <div>
      <a href='https://github.com/MadickAngeCesar' target='_blanc'><BsGithub /></a>
    </div>
    <div>
    <a href='https://www.facebook.com/madick.angecesar' target='_blanc'><FaFacebookF /></a>
    </div>
  </div>
);

export default SocialMedia;
