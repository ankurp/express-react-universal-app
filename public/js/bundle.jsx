import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../views/app.jsx';

const props = JSON.parse(document.getElementById('bootstrap-data').innerText);

ReactDOM.render(<App {...props} />, document.getElementById('root'));
