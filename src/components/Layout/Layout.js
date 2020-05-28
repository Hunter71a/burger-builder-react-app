import React from 'react';

import Combine from '../../hoc/Auxillary';
import classes from './Layout.css';

const layout = (props) => (
  <Combine>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Content}>
    {props.children}
  </main>
  </Combine>
);

export default layout;