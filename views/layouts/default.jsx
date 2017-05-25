const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          <div id="root">{this.props.children}</div>
          <script type="text/javascript" src="js/bundle.js" />
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
