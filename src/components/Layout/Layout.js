import React from 'react';

import Combine from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Combine>
  <Toolbar />
  <SideDrawer />
  <main className={classes.Content}>
    {props.children}
  </main>
  </Combine>
);

export default layout;