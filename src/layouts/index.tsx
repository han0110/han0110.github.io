import * as React from 'react';

import Navbar from 'components/Navbar';

import 'styles/style.scss';

interface Props {
  children: ({ location }: { location: { pathname: string } }) => React.ReactNode;
  location: {
    pathname: string;
  };
}

const Layout = ({ children, location, ...props }: Props) => (
  <div className="layout__wrapper">
    <Navbar pathname={location.pathname} />
    <div className="layout__children">{children({ location, ...props })}</div>
  </div>
);

export default Layout;
