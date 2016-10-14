class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bills: [
        {
          title: "Test Bill",
          ayes: 43,
          nayes: 25,
          date: Date.now(),
          descrip: "This is a bill its a bill bill bill."
        },
        {
          title: "Test Bill2",
          ayes: 53,
          nayes: 45,
          date: Date.now(),
          descrip: "This is a bill its a bill bill bill2222."
        },
        {
          title: "Test Bill3",
          ayes: 63,
          nayes: 15,
          date: Date.now(),
          descrip: "This is a bill its a bill bill bill3333."
        }
      ]
    }
  }

  // $.ajax({
  //
  // }).fail(function(response) {
  //
  //   // setState to these bills
  // }.bind(this));

  render() {
    return(
      <div>
        <h2>We in dis parent-most, App component, yung stunna.</h2>
        <Timeline bills={this.state.bills}/>
      </div>
    )
  }
}
