import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import MdPick from './Components/Mdpick/MdPick';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MdPick />
      </div>
    );
  }
}

export default Main;
