import React, { Component } from "react";

import Combine from '../../hoc/Auxillary';

class BurgerBuilder extends Component {
  render() {
    return(
      <Combine>
        <div>Burger</div>
        <div>Build Controls</div>
      </Combine>
    );
  }
}

export default BurgerBuilder;