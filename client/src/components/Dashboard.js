import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { allSurvays } from './actions/index'

class Dashboard extends Component {
  state = {}

  componentDidMount () {
    this.props.allSurvays()
  }

  render () {
    return (
      <div>
        <h1>Welcome to my App </h1>
        <div>
          {this.props.survays.map((survay, index) => {
            return (
              <div className='row'>
                <div className='col s12 m12 l12'>
                  <div className='card purple lighten-4 darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>{survay.title}</span>
                      <p>{survay.body}</p>
                    </div>
                    <div className='card-action'>
                      <a href='rwe'>Number of Yes {survay.yes}</a>
                      <a href='wer'>Number of No {survay.no}</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Link to='/survaynew' className='btn-floating btn-large right red'>
          <i className='large material-icons'>add</i>
        </Link>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    survays: state.survays
  }
}

export default connect(
  mapStateToProps,
  { allSurvays }
)(Dashboard)
