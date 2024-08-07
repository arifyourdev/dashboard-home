import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
function ChartComp() {
    const colors = ['#6f93f8', '#6f93f8', '#6f93f8', '#6f93f8', '#6f93f8', '#6f93f8', '#6f93f8', '#6f93f8','#6f93f8'];

    const [options, setOptions] = useState({
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['1'],
            ['9'],
            ['11'],
            '13',
            ['13'],
            ['15'],
            ['19'],
            ['21',], 
            ['24',], 
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '12px'
            }
          }
        }
      });
    
      const [series, setSeries] = useState([{
        data: [21, 22, 10, 28, 16, 21, 13, 30 ,34]
      }]);
  return (
    <div>
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
    <div id="html-dist"></div>
  </div>
  )
}

export default ChartComp