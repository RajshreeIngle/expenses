import React from 'react'
import './ChartsBar.css'

export default function ChartsBar(props) {
    let barFillHeigth = '0%';

    if(props.maxValue > 0){
        barFillHeigth = Math.round((props.value/props.maxValue) *100) + '%';
        console.log(barFillHeigth+"njnjknjjnj")
    }

  return (
    <div className='chart-bar'>
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeigth}}></div>  
        </div>
        <div className="chart-bar__label">{props.label}</div>
      
    </div>
  )
}
