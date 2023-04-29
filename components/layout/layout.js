import { Fragment } from 'react';

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment style={{minWidth: "430px"}}>
      <MainNavigation />
      <main style={{minWidth: "430px"}}>
      {props.children }
      </main>
    </Fragment>
  );
}

export default Layout;
