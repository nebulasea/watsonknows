import React from 'react';
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import {Row, Col} from 'react-grid-system';
import Paper from 'material-ui/Paper';
const style = {
  lineHeight: '20px',
  fontFamily: 'moon',
  textAligm: 'center'
};

export default(props) => {
  let data = props
    .data
    .map(elem => {
      return {
        ...elem,
        "score": parseFloat(elem.score)
      }
    })
  return (
    <div>
      <Paper height={500} width={450} zDepth={4}>
        <ResponsiveContainer width="100%" height={500}>
          <Col md={12}>
            <RadialBarChart
              width={500}
              height={500}
              cy='30%'
              innerRadius={40}
              outerRadius={150}
              barSize={10}
              data={data}>
              <RadialBar minAngle={15} background clockWise={true} dataKey='score'/>
              <Legend
                iconSize={10}
                width={300}
                height={170}
                layout='vertical'
                verticalAlign='bottom'
                iconType='circle'
                wrapperStyle={style}/>
            </RadialBarChart>
          </Col>
        </ResponsiveContainer>
      </Paper>

    </div>
  )
}