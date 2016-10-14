class Bill extends React.Component {


  render() {
    return(
      <li>
        <div id="chart-div-shit">
          <time>{this.props.data.date}</time> {this.props.data.descrip}
        </div>
      </li>
    )
  }
}
