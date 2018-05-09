// @flow

import React, { Component } from 'react';

import saadIcon from 'assets/images/saadIcon.svg';
import cupIcon from 'assets/images/cupIcon.svg';
import triangleIcon from 'assets/images/triangleIcon.svg';

const projects = [
  {
    title: 'NTUEE Playground',
    theme: '#65C6BB',
    img: { src: saadIcon, alt: 'saad' },
    content: {
      abstract: [
        'A website for NTUEE\'s MakerSpace.We hope everyone in this MakerSpace can participate the construction of it, no matter projects, events, rules, or any idea.',
        'By Gatsby (a static site framework), we make contribution easier. Contributor only needs to write markdown but no javascript.',
      ],
      status: 'On Progress',
      demo: 'https://ntuee-maker.github.io/',
      source: 'https://github.com/ntuee-maker/ntuee-maker.github.io',
    },
  },
  {
    title: 'Coffee Order App',
    theme: '#DA7D9A',
    img: { src: cupIcon, alt: 'cup' },
    content: {
      abstract: [
        'A web app for coffee club, aim to make ordering a cup of coffee faster.',
      ],
      status: 'Complete',
      demo: 'https://han0110.github.io/ntu-coffee-order-webapp/',
      source: 'https://github.com/han0110/ntu-coffee-order-webapp',
    },
  },
  {
    title: 'Three Sketch',
    theme: '#303030',
    img: { src: triangleIcon, alt: 'triangle' },
    content: {
      abstract: [
        'My casually sketch built on three.js. I am fascinated with 3D and VR, by collecting these daily sketch, someday I will build a 3D version of my portfolio.',
        'Wish to collaborate with other 3D artists, make more 3D works alive on the web.',
      ],
      status: 'On Progress',
      demo: 'https://han0110.github.io/threejs-sketch/',
      source: 'https://github.com/han0110/threejs-sketch',
    },
  },
];

type State = {
  active: string,
};

class Projects extends Component<{}, State> {
  constructor() {
    super();
    this.state = { active: '' };
  }

  render() {
    const { active } = this.state;

    return (
      <div className="projects__wrapper">
        <div>
          {
            // eslint-disable-next-line object-curly-newline
            projects.map(({ title, theme, content: { abstract, status, demo, source } }) => (
              <div className="projects__content" data-active={title === active}>
                <h2 data-status={status} style={{ color: theme }}>{title}</h2>
                { abstract.map(a => <p>{a}</p>) }
                <a href={demo} rel="noopener noreferrer" target="_blank"><p>demo</p></a>
                <a href={source} rel="noopener noreferrer" target="_blank"><p>source</p></a>
              </div>
            ))
          }
        </div>
        <div className="projects__cards">
          {
            projects.map(({ title, theme, img }) => (
              <div
                style={{ backgroundColor: theme }}
                onClick={() => this.setState({ active: title })}
                onKeyDown={() => this.setState({ active: title })}
                role="button"
                tabIndex={0}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Projects;
