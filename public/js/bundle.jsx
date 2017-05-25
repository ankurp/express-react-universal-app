import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../views/main.jsx';

ReactDOM.render(<Main {...window.__INITIAL_STATE__} />, document.getElementById('root'));
