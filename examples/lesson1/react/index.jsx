import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 
          onClick={()=>{
            alert('hi');
          }}
        >hello world</h1>
      </div>
    );
  }
}