import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
 
class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        {this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)}
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

function msp(state) {
  return { 
    bands: state.bands
  }
}

function mdp(dispatch) {
  return {
    addBand: band => {
      return dispatch({ type: "ADD_BAND", payload: band })
    }  
  }
}

export default connect(msp, mdp)(BandsContainer)