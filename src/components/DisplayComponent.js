import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div className="message">
        <h6>Message:</h6>
        <p>{this.props.sayWhat}</p>
      </div>
    );
  }
}

export default DisplayComponent;
