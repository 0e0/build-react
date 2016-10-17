import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default class App extends Component {
  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0} >
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabList>

        <TabPanel>
          <h2>How to learn anything more efficientlly and effectively?</h2>
          <ul>
            <li>deconstruct/chunk</li>
            <li>Focus on one thing at a time</li>
            <li>Be consistent</li>
            <li>When starting, test different methods</li>
            <li>When growing, stick with one method</li>
            <li>debriefing/review</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>How do I adjust my approach so I can learn more efficientlly and effectively?</h2>
          <ul>
            <li>Make a list of my learning goals for the day</li>
            <li>split/chunk them into smaller goals</li>
            <li>Keep track of my micro goals by writing them down</li>
            <li>Keep adjusting my approach as I learn about what works and what does not</li>
            <li>"End of the day - review and plan next day's goals"</li>
            <li>debriefing/review</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>

    );
  }
}
