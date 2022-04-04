import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Recharts.css'

const Recharts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='recharts'>
      <div className="line-area-chart">
        <div>
          <h2>Line Chart</h2>
          <h4>Investment VS Revenue</h4>
          <LineChart width={400} height={400} data={data}>
            <Line dataKey="investment" stroke="#8884d8"></Line>
            <Line dataKey="revenue" stroke="red"></Line>
            <YAxis></YAxis>
            <XAxis dataKey="month"></XAxis>
            <Tooltip></Tooltip>

          </LineChart>
        </div>
        <div>
          <h2>Area Chart</h2>
          <h4>Investment VS Revenue</h4>
          <AreaChart width={500} height={400} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
      </div>
      <div className='pie-radialBar-chart'>
        <div>
          <h2>Pie Chart</h2>
          <h4>Monthly  Investment VS Revenue</h4>
          <PieChart width={400} height={200}>
            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip></Tooltip>
          </PieChart>

        </div>

        <div>
          <h2>RadialBar Chart</h2>
          <h4>Monthly  Sells</h4>

          <RadialBarChart
            width={600}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='sell' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
          </RadialBarChart>
        </div>

      </div>





    </div>



  );
};

export default Recharts;