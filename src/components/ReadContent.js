import {Component} from 'react';


class ReadContent extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </div>
    )
  }
}

 export default ReadContent