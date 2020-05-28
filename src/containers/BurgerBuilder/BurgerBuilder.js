import React, { Component } from "react";

import Combine from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return(
      <Combine>
       <Burger />
        <div>Build Controls</div>
      </Combine>
    );
  }
}

export default BurgerBuilder;