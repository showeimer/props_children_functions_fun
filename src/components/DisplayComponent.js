import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div className="message">
        <p className="reverse-shadow">{this.props.sayWhat}</p>
      </div>
    );
  }
}

export default DisplayComponent;
