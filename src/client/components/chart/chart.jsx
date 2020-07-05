import {Line} from 'react-chartjs-2';
import React, { memo } from 'react';

const Chart=(props)=>{
    const {posts } = props;
    const state = {
        labels: posts.map(post=> post.objectID),
        datasets: [
          {
            label: 'votes',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: posts.map(post=> post.points)
          }
        ]
      }
    return (
    <div className='chart'>
        <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'Votes Per Post',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      <style jsx>
        {`
        .chart{
          border-top: 2px solid orange;
      }`}
      </style>
    </div>);
}

export default memo(Chart);