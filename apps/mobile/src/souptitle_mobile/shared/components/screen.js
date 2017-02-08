const React = require('react');

class Screen extends React.Component {
  constructor({ route }) {
    super();
    this.setRouteParams(route);
  }

  componentWillReceiveProps({ route }) {
    this.setRouteParams(route);
  }

  setRouteParams(params) {
    Screen.prototype.route = params;
  }

  render() {
    return this.props.children;
  }
}

module.exports = Screen;
