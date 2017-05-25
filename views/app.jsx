const React = require('react');

class App extends React.Component {
  onClick() {
    window.alert('Hello');
  }
  render() {
    return (
      <div>
        <div>Hello {this.props.name}</div>
        <button onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}

module.exports = App;
