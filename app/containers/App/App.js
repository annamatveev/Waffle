import React, { Component } from 'react';
import FirstWaffle from '../FirstWaffle/FirstWaffle';
import SecondWaffle from '../SecondWaffle/SecondWaffle';

class App extends Component {
  render() {
    console.log('App is rendering...');
    return (
      <div className="app">
        <FirstWaffle />
        <SecondWaffle />
      </div>
    );
  }
}
export default App;
