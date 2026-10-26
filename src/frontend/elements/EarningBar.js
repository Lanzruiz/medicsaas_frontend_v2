import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class EarningBar extends Component {
  render() {
    var activityData = [
        [35, 18, 60, 35, 40, 20, 30, 25, 22, 20],

        [50, 35, 10, 45, 40, 50, 60, 35, 10, 50],

        [20, 35, 60, 45, 40, 35, 30, 35, 10, 40],

        [25, 88, 25, 50, 21, 42, 60, 33, 50, 60],
    ];
    const data = {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
      ],
      datasets: [
        {
          label: "My First dataset",
          data: activityData[this.props.dataActive],
          borderColor: "rgba(47, 76, 221, 1)",
          borderWidth: "0",
        //   barThickness:'50',
         barThickness:'flex',
          backgroundColor: "#ff6d4d",
          minBarLength:10
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,

      plugins : {
        legend: {
          display: false,
        },
      },
      scales: {
        y: 
          {
            grid: {
              color: "rgba(233,236,255,1)",
              drawBorder: true,
            },
            ticks: {
                fontColor: "#3e4954",
                max: 60,
                min: 0,
                stepSize: 20
            },
          },
        
        x: 
          {
            barPercentage: 0.7,
            grid: {
              display: true,
              color: "rgba(233,236,255,1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              stepSize: 20,
              fontColor: "#3e4954",
              fontFamily: "Nunito, sans-serif",
            },
          },
        
      },
      tooltips: {
        mode: "index",
        intersect: false,
        titleFontColor: "#888",
        bodyFontColor: "#555",
        titleFontSize: 12,
        bodyFontSize: 15,
        backgroundColor: "rgba(255,255,255,1)",
        displayColors: true,
        xPadding: 10,
        yPadding: 7,
        borderColor: "rgba(220, 220, 220, 1)",
        borderWidth: 1,
        caretSize: 6,
        caretPadding: 10
      },
    };

    return (
      <div style={{ minHeight: "290px" }}>
        <Bar
          data={data}
          width={this.props.width ? this.props.width : 433}
          height={this.props.height ? this.props.height : 251}
          options={options}
        />
      </div>
    );
  }
}

export default EarningBar;