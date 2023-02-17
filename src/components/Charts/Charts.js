import React from 'react'
import './Charts.css'
import ChartsBar from './ChartsBar'

export default function Charts(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) =>(  
        <ChartsBar
        key={dataPoint.label}
        value = {dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}/>
    ))} 
    </div>
  )
}
