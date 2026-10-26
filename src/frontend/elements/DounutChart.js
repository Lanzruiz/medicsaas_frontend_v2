import React from 'react'
import ReactApexChart from 'react-apexcharts'

class DounutChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        series: [26,10,26,9,12,16,32,6],
        options: {
            chart: {
                //height: 330,
               // width:560,
                type: 'donut',
                sparkline: {
                    enabled: true,
                },
            },
            labels: ["Fast Food", "Italian ", "Main Course","Starter ", "Beverages", "Indian ","Dessert ", "Other "],
            plotOptions: {
				pie: {
					customScale: 1,
					donut: {
						size: '50%'
						
					}
				}
			},           
            legend: {
				show:true,
				 fontSize: '18px',
				position: 'right',
				  offsetY: 0,
				  //height: 270,
				   itemMargin: {
					  vertical: 5,
					horizontal: 5,
				  },
				  markers: {
					  width: 16,
					  height: 16,
					  strokeWidth: 0,
					  radius: 0,
				  },
			},
            dataLabels: {
				enabled: false
			},
            responsive: [{
				breakpoint: 1300,
				options: {
					chart: {
						height: 230,
						width:400
					},
					legend: {
						fontSize: '14px',
						itemMargin: {
						  vertical: 0,
						horizontal: 5,
					  },
					}
				}
			},
            {
				breakpoint: 575,
				options: {
					chart: {
						height: 230,
						width:300
					},
					legend: {
						show:false,
						fontSize: '14px',
						itemMargin: {
						  vertical: 0,
						horizontal: 5,
					  },
					}
				}
			}],
        },
    }
  }

  render() {
    return (
      <div id='chart' className="d-inline-block donut-chart-d">
        <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type='donut'
            height={350}
            width={520}
        />
      </div>
    )
  }
}

export default DounutChart
