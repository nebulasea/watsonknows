import React, {Component} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-grid-system'
import Search from './search'
import {connect} from 'react-redux'
import {updateText} from '../actions/action-text.js'
import {updateResults} from '../actions/action-results.js'
import Graph from './graph'

@connect((store) => {
  return {text: store.text.value, results: store.results};
})
export default class Welcome extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
    let action = updateText(event.target.value);
    this
      .props
      .dispatch(action)
  }
  handleSearch = (event) => {
    let action = updateResults(this.props.text);
    this
      .props
      .dispatch(action)

  }
  render() {
    return (
      <div id="reactcomp">
        <Row>
          <Col md={12}>
            <Search
              handleChange={this.handleChange}
              searchInput={this.props.text}
              handleSearch={this.handleSearch}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={6}>
            <div id="one">
              <h3>Current Sentence</h3>
              <Graph data={this.props.results.currentMood}/>

            </div>
          </Col>
          <Col md={6}>
            <div id="two">

              <h3>Cumulative</h3>
              <Graph data={this.props.results.totalMood}/>

            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
