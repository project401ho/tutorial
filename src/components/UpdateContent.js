import {Component} from 'react';


class UpdateContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,

    }
  }
  inputFormhandler(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render(){
    return(
      <div>
        <h1>UPDATE CONTENT</h1>
        
        <form action="/create_process" method="post"
          onSubmit={(e)=>{
            e.preventDefault();
            this.props.contentsubmitHandler(this.state.id,this.state.title,this.state.desc)
          }}
        >
          <input type="hidden" value = {this.state.id} name = "id"></input>
          <p><input 
                type="text" 
                name="title" 
                placeholder="title" 
                value = {this.state.title}
                onChange = {(e)=>this.inputFormhandler(e)}
              ></input></p>
          <p><textarea 
                name="desc" 
                placeholder="description" 
                value = {this.state.desc}
                onChange = {(e)=>this.inputFormhandler(e)}
              ></textarea></p>
          <p><input type="submit"></input></p>          
        </form>
      </div>
    )
  }
}

 export default UpdateContent