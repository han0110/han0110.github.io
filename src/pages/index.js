// @flow

import React from 'react';

import Contact from 'components/about/Contact';

const About = () => (
  <div className="about__wrapper">
    <div className="about__roles">
      <h2>Barista</h2>
      <h2>Full Stack Developer</h2>
      <h2>Mascot</h2>
    </div>
    <h2 style={{ marginTop: '0' }}>All in one</h2>
    <p>Studying at National Taiwan University now</p>
    <Contact />
  </div>
);

export default About;
