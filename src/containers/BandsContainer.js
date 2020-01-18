import React, { Component } from 'react'
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        
        <BandInput addBand={this.props.addBand} />

        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
        
      </div>
    )
  }
}

const msp = state => {
  return { bands: state.bands }
}

const mdp = dispatch => {
  return { addBand: (name) => dispatch({type: "ADD_BAND", band: name})}
}

export default connect(msp, mdp)(BandsContainer)
