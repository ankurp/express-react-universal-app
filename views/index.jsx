const React = require('react');
const DefaultLayout = require('./layouts/default.jsx');
const Main = require('./main.jsx');

function objectWithoutProperties (object, properties) {
  'use strict'

  var obj = {}
  var keys = Object.keys(object)
  keys.forEach((key) => {
    if (!~properties.indexOf(key)) {
      obj[key] = object[key]
    }
  })
  return obj
}

class Application extends React.Component {
  render() {
    const props = objectWithoutProperties(this.props, ['settings', '_locals', 'cache']);

    return (
      <DefaultLayout title={this.props.title}>
        <Main {...this.props} />
        <script
          type="text/javascript"
          id="bootstrap-data"
          dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(props)}`}}
        ></script>
      </DefaultLayout>
    );
  }
}

module.exports = Application;
