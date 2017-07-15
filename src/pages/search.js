import React from 'react'
import {Row, Col} from 'react-grid-system'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

export default(props) => {
  return (
    <Card>
      <CardText>
        <Row>
          <Col md={9}>
            <div>
              <TextField
                hintText="Any sentence will do."
                onChange={props.handleChange}
                value={props.searchInput}/>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <RaisedButton label="Analyze" primary={true} onTouchTap={props.handleSearch}/>
            </div>
          </Col>
        </Row>
      </CardText>
    </Card>

  )
}