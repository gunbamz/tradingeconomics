import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import useWindow from "./useWindow";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {

  const [chartData, setChartData] = useState(null);
  //const { height, width } = useWindow();
  // const timo = (a) => {
  //   const b = new Date(a);
  //   return b.getHours() + ':' + b.getMinutes();
  // };
  // const GetData = async () => {
   
  // };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
    legend: {
      labels: {
        fontSize: 10,
      },
    },
  };
  const Chart = async () => {
    if (props.data == null) {
    } else {
      let labels = [...props.data].map((x) => x.DateTime.split("-")[0]);
      setChartData({
        labels,
        datasets: [
          {
            label: `${props.data[0].Frequency} ${props.data[0].Category}`,
            yAxisID: 'y',
            data: [...props.data].map((x) => x.Value),
            backgroundColor: 'rgba(0, 0, 255, 0.8)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  };
  
  useEffect(() => {
    props.data && Chart();
  }, [props.data]);

  return (
    <div>
      {chartData && (
        <Bar
          data={chartData}
          height={260}
          width={700}
          options={options} />
      )}
    </div>
  );
};
export default BarChart;
