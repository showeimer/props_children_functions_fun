import React, {Component} from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <button className="btn bg-danger reverse-shadow" type="submit" onClick={this.props.onClick}>Submit</button>
      </div>
    );
  }
}


export default ChildComponent;
