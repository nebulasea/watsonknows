import React, {Component} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-grid-system'
import Search from './search'
import Gallery from './gallery'
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
      <div>
        <Row>
          <Col md={12}>
            <Search
              handleChange={this.handleChange}
              searchInput={this.props.text}
              handleSearch={this.handleSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* <div>{JSON.stringify(this.props.results)}</div> */}
            <Graph data={this.props.results} />

          </Col>
        </Row>
      </div>
    )
  }
}
