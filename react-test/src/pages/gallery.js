import React from 'react'; 
import { Row, Col } from 'react-grid-system';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
function renderImage(img){
  if (img.length > 0){
    return(
  <img src={img} alt="" />
    )
}else{
  return (
    <div>Loading...</div>
  )
}
}
export default (props) => {
  return (

    <Card>
      <CardMedia>
         {renderImage(props.img)}
      </CardMedia>
    </Card>

  )
}