import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { productApi } from '../../../../../config';
import './Characters.scss';

class Characters extends Component {
  render() {
    const { img, name, history } = this.props;
    return (
      <div className="friendsContainer">
        <img
          onClick={() => history.push(`category/${name}`)}
          src={img}
          alt="characters"
        />
        <div
          onClick={() => history.push(`category/${name}`)}
          className="characterNames"
        >
          {name}
        </div>
      </div>
    );
  }
}

export default withRouter(Characters);
