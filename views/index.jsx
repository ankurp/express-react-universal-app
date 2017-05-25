const React = require('react');
const DefaultLayout = require('./layouts/default.jsx');
const App = require('./app.jsx');

class Application extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <App {...this.props} />
        <script type="application/json" id="bootstrap-data" dangerouslySetInnerHTML={{__html:
         JSON.stringify(this.props)}}></script>
      </DefaultLayout>
    );
  }
}

module.exports = Application;
