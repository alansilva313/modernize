import  { Component } from "react";
import Chart from "react-apexcharts";

class Linha extends Component {




  constructor(props: string) {
    super(props);

    this.state = {
      options: {
        
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
              horizontal: true
            }
          },
       
       
      },
      series: [{
        data: [{
          x: 'category A',
          y: 220
        }, {
          x: 'category B',
          y: 180
        }, {
          x: 'category C',
          y: 13
        }]
      }]
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
              type="bar"
              width="510"
              heigth= "300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Linha;