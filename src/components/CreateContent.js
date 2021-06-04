import {Component} from 'react';


class CreateContent extends Component {
  render(){
    return(
      <div>
        <h1>CREATE CONTENT</h1>
        <form action="/create_process" method="post"
          onSubmit={(e)=>{
            e.preventDefault();
            this.props.submitHandler(e.target.title.value, e.target.desc.value)
          }}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>          
        </form>
      </div>
    )
  }
}

 export default CreateContent