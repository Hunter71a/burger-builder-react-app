import React from 'react';

import Combine from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Combine>
  <Toolbar />
  <main className={classes.Content}>
    {props.children}
  </main>
  </Combine>
);

export default layout;