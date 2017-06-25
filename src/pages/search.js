import React from 'react';
import { Row, Col } from 'react-grid-system';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


export default (props) => {
  return(
    
  <Card>
    <CardText>
      <Row>
      <Col md={8}>
        <div>
          <TextField
            hintText="Giphy Search" 
            onChange={props.handleChange}
            value={props.searchInput}
          />
        </div>
      </Col>
      <Col md={4}>
      <div>
          <RaisedButton label="Search" 
          primary={true}
          onTouchTap={props.handleSearch}
          />
        </div>
        </Col>
        </Row>
        </CardText>
        </Card>
 
  )
}