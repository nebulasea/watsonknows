import React, {Component} from 'react';
import axios from 'axios';
import {Row, Col} from 'react-grid-system';
import Search from './search';
import Gallery from './gallery';


export default class Welcome extends Component{
constructor(){
  super();
  this.state={searchInput: '', img: ''}; 
  }

handleChange = (event) => {
  console.log(event.target.value);
  this.setState({searchInput: event.target.value});
}
handleSearch = (event) => {
  var _this = this;
  var url = "http://api.giphy.com/v1/gifs/search?q=movies+" + this.state.searchInput + "&api_key=dc6zaTOxFJmzC&limit=10";
  axios.get(url)
    .then(function (response) {

      console.log(response)
      _this.setState({img:response.data.data[0].images.fixed_height.url||""});
    })
    .catch(function (error) {
      console.log(error);
    });
}


render(){
    return (
      <div>
        <Row>
          <Col md={12}>
            <Search
              handleChange={this.handleChange}
              searchInput={this.state.searchInput}
              handleSearch={this.handleSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Gallery
            img={this.state.img}/>
          </Col>
        </Row>
      </div>
    )
}
}
