import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Combiner from '../../../hoc/Auxillary';



const sideDrawer = (props) => {
  //add styles for CSS here
  return (
    <Combiner>
    <Backdrop show />
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Combiner>
  );
};



export default sideDrawer;