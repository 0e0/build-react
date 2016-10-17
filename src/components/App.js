import React, { Component } from 'react';
import Tabs from './tabs';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='element'>
          <h3>What do I want to learn today? </h3>
          <p>I am really thankful for being able to learn how to code!</p>
        </div>
        <div className='great'>
          <h3>How do I improve my day to day learning?</h3>
          <p>I need to go through the process I created today!</p>
        </div>
        <Tabs />
      </div>

    );
  }
}
