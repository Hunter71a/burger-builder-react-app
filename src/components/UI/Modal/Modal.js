import React, { Component } from 'react';


import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Combiner from '../../../hoc/Combine/Combine';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {  // demonstrate unnecessary updating is prevented
    console.log('Modal component will update now!')
  }


  render() {
    return (
      <Combiner>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>

      </Combiner>
    );
  }
}

export default Modal;

// convert to class based component to implement method to reduce uneccesary
// rerender cycles
// }= (props) => (
//  <Combiner>
//     <Backdrop show={props.show} clicked={props.modalClosed} />
//       <div
//         className={classes.Modal}
//         style={{
//           transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//           opacity: props.show ? '1' : '0'
//         }}>
//         {props.children}
//       </div>

//   </Combiner>
//);


// export default modal;

