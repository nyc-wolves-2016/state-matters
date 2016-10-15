class Bill extends React.Component {

  constructor() {
    super();
    // this.addChart = this.addChart.bind(this);
    // this.removeChart = this.removeChart.bind(this);
  }

  // addChart() {
  //   console.log("mouse entered");
  //   addZeChart(this.props.supaKey);
  // }
  //
  // removeChart() {
  //   console.log("mouse left");
  //   var chart = document.getElementById(this.props.supaKey);
  //   chart.remove();
  //   var billID = this.props.othaSupaKey;
  //   var chartID = this.props.supaKey;
  //   $('#'+billID).append('<div id='+chartID+'></div>')
  //   // debugger;
  // }
  //
  //
  // <li id={this.props.othaSupaKey}>
  //   <div onMouseEnter={this.addChart} onMouseLeave={this.removeChart}>
  //     <time>{this.props.data.date}</time> {this.props.data.descrip}
  //   </div>
  //   <div id={this.props.supaKey}></div>
  // </li>

  render() {
    let {year, title, supaKey, othaSupaKey} = this.props.data
    return(
      <li id={othaSupaKey}>
        <time>{year}</time> {title}
        <div id={supaKey}></div>
      </li>
    )
  }
}
