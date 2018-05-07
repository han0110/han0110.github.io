// @flow

import React from 'react';

import emailIcon from 'assets/images/emailIcon.svg';
import fbIcon from 'assets/images/fbIcon.svg';

const Contact = () => {
  const contacts = [
    { src: emailIcon, href: 'mailto:tinghan0110@gmail.com', show: 'tinghan0110@gmail.com' },
    { src: fbIcon, href: 'https://www.facebook.com/han0110', show: 'han0110' },
  ];

  return (
    <div className="contact__wrapper">
      {
        contacts.map(({ src, href, show }) => (
          <div>
            <img
              src={src}
              alt={show}
            />
            <a href={href} rel="noopener noreferrer" target="_blank">
              {show}
            </a>
          </div>
        ))
      }
    </div>
  );
};

export default Contact;
