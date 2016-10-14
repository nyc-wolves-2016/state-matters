class Bill extends React.Component {


  render() {
    return(
      <li>
        <div>
          <time>{this.props.data.date}</time> {this.props.data.descrip}
        </div>
      </li>
    )
  }
}
