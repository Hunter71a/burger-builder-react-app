import React, {Component} from 'react';

import Button from '../../UI/Button/Button';
import Combiner from '../../../hoc/Auxillary';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (<li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
        );
      });
    return (
      <Combiner>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Combiner>
    );

  }
}

export default OrderSummary;

  // }= (props) => {
  //   const ingredientSummary = Object.keys(props.ingredients)
  //     .map(igKey => {
  //       return (<li key={igKey}>
  //         <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
  //       </li>
  //       );
  //     });

  //   return (
  //     <Combiner>
  //       <h3>Your Order</h3>
  //       <p>A delicious burger with the following ingredients:</p>
  //       <ul>
  //         {ingredientSummary}
  //       </ul>
  //       <p><strong>Total Price: ${props.price}</strong></p>
  //       <p>Continue to checkout?</p>
  //       <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
  //       <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
  //     </Combiner>
  //   );
//
//};

// export default orderSummary;