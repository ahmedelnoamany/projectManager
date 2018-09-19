import React, { Component } from 'react';

import Header from '../../components/Header';
import '../../css/style.css';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
}
export default App;