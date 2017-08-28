import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <h3>State,props,children,function,fun!</h3>
        <h6>Message</h6>
        {this.props.sayWhat}
      </div>
    );
  }
}

export default DisplayComponent;
