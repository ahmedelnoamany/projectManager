import React, { Component } from 'react';
import Header from '../base/Header';
import CardDay from '../components/cardDay';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10rem'
        }}
        >
          <CardDay />
        </div>
      </div>
    )
  }
}