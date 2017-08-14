import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>...Heading Starts here</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
