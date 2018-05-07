// @flow

import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

type Props = {
  pathname: string,
};

const Navbar = ({ pathname }: Props) => {
  const links = [
    { id: 'About', to: '/' },
    { id: 'Projects', to: '/projects' },
    { id: 'Tags', to: '/tags' },
  ];

  return (
    <div className="navbar__wrapper">
      <h1 className="navbar__title">HAN</h1>
      <nav className="navbar__links">
        {
          links.map(({ id, to }) => (
            <Link
              className="navbar__link"
              data-active={to === '/' ? pathname === withPrefix(to) : pathname.includes(withPrefix(to))}
              key={id}
              to={to}
            >
              {id}
            </Link>
          ))
        }
      </nav>
    </div>
  );
};

export default Navbar;
