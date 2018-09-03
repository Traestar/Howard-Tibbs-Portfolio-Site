import React from 'react';
  
import AboutBox from './About/AboutBox';
import ExperienceBox from './Experience/ExperienceBox';
import EducationBox from './Education/EducationBox';
import ContactBox from './Footer/ContactBox';
import HeroBox from './Hero/HeroBox';
import PortfolioBox from './Portfolio/PortfolioBox';
import SkillsBox from './Skills/SkillsBox';


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