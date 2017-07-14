import React from 'react';
import  {RadialBarChart, RadialBar, Legend} from 'recharts'; 

const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };

export default (props) => {
  let data = props.data.map(elem => {
    return {...elem, "score": parseFloat(elem.score)}
  })
  return (    	
  <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} background clockWise={true} dataKey='score'/>
        <Legend iconSize={10} width={320} height={240} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>

  )
}