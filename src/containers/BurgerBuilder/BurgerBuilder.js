import React, { Component } from "react";

import Combine from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return(
      <Combine>
       <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Combine>
    );
  }
}

export default BurgerBuilder;