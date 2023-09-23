import  { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {




  constructor(props: string) {
    super(props);

    this.state = {
      options: {
        
        chart: {
          type: 'donut'
        },
      
       
       
      },
      series: [144, 55, 41, 107, 15],
      chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
      }
    };
  }
 
  
  render() {
    return (
      <div className="app w-lgr  shadow-xl">
        <div className="row">
          <div className="mixed-chart">
            <Chart 
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="510"
              heigth= "300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;