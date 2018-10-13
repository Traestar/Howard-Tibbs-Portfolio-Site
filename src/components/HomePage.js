import React from 'react';
import Cosmic from 'cosmicjs';

import AboutBox from './About/AboutBox';
import ExperienceBox from './Experience/ExperienceBox';
import EducationBox from './Education/EducationBox';
import ContactBox from './Footer/ContactBox';
import HeroBox from './Hero/HeroBox';
import PortfolioBox from './Portfolio/PortfolioBox';
import SkillsBox from './Skills/SkillsBox';

{/*
const Cosmic = require('cosmicjs');
const api = Cosmic();
const bucket = api.bucket({
  slug: 'howard-tibbs-portfolio',
  read_key: 'pvYYD3SIkCoLEoL683NA0asxfr97a7asG4NEZPWntcMuEMXAHi'
});
 const data = await bucket.getBucket() */}


  const HomePage = () => (
    <div>
      <HeroBox />
      <AboutBox />
      <ExperienceBox />
      <EducationBox />
      <SkillsBox />
      <PortfolioBox />
      <ContactBox />
    </div>
  );
  
  export default HomePage;