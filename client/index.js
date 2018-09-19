import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/containers/app/App';

const Root = () => {
  return (
    <App />
  );
};

ReactDOM.render(<Root />, document.querySelector('.container'));