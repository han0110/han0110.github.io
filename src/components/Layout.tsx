import * as React from 'react'

import Navbar from 'components/Navbar'

export interface LayoutProps {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: LayoutProps) => (
  <div className="layout__wrapper">
    <Navbar pathname={location.pathname} />
    <div className="layout__children">{children}</div>
  </div>
)

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => (props: P & LayoutProps) => (
  <Layout location={props.location}>
    <WrappedComponent {...props} />
  </Layout>
)

export default Layout
