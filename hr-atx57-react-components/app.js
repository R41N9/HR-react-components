// TODO
class GroceryList extends React.Component {

  constructor(props) {
    super(props);
    // this.onItemMouseEnter = this.onItemMouseEnter.bind(this);
    // this.onItemMouseLeave = this.onItemMouseLeave.bind(this);
    this.state = {
      bold: false
    }
  }

  // onItemMouseEnter() {
  //   this.style.fontWeight = 700;
  // }
  // onItemMouseLeave() {
  //   this.style.fontWeight = 400;
  // }

  handleBoldToggle = (index) => {
    // this.setState({bold: !this.state.bold});
    this.setState({bold: index});
  }

  handleOnMouseLeave = () => {
    this.setState({bold: false});
  }

  render() {
    return (
      <ul>
        {this.props.sasquatch.map((item, index) => {
          return (<li id={index} onMouseEnter={() => this.handleBoldToggle(index)} onMouseLeave={this.handleOnMouseLeave} style={{fontWeight: this.state.bold === index ? 'bold' : 'normal'}}>{item}</li>);
        })}
      </ul>
    )
  }

}


ReactDOM.render(<GroceryList sasquatch={['Ayples', 'Banaynays', 'BabySasquatch']} />, document.getElementById("app"));


// class Ding-Dongs {
//   <li>Ding-Dongs</li>
// }

// class PineappleChunks {
//   <li>Pineapple Chunks</li>
// }

// class GroceryListItem (item) {
//   <li>{item}</li>
// }