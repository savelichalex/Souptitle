goog.provide('souptitle_mobile.shared.components.screen_base')

souptitle_mobile.shared.components.screen_base.getScreenComponent = function getScreenComponent(React) {
  var Component = React.Component;
  function Screen(props) {
    Component.call(this);
    this.setRouteParams(props.route);
  }

  Screen.prototype = Object.create(Component.prototype);
  Screen.prototype.constructor = Screen;
  Screen.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    this.setRouteParams(props.route);
  };
  Screen.prototype.setRouteParams = function setRouteParams(params) {
    Screen.prototype.navigationOptions = params;
  };
  Screen.prototype.render = function render() {
    console.log(this)
    return this.props.children;
  };

  return Screen;
};
