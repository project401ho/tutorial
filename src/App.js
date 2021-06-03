import './App.css';
import React , {Component} from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mode:"welcome",
      subject: {title:"WEB", sub: "world wide web"},
      welcome: {title:"Welcome", desc: "HELLO REACT"},
      selected_content_id:2,
      contents: [
        {id: 1, title: "HTML", desc: "HTML is Hyper Text Markup Language"},
        {id: 2, title: "CSS", desc: "CSS is for decoration"},
        {id: 3, title: "JavaScript", desc: "JS is for dynamic webpage"}
      ]
    }
  }

  render(){
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode ==="read"){
      _title = this.state.contents[this.state.selected_content_id-1].title
      _desc = this.state.contents[this.state.selected_content_id-1].desc
    }

    return (
      <div className="App">
        
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={()=>{
            this.setState({mode:"welcome"})
          }}
        >          
        </Subject> 
        <TOC 
          data = {this.state.contents} 
          onChangeContent = {(id)=>{
            this.setState({
              mode:"read",
                selected_content_id : Number(id)
              })
          }}
          ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
  
}

export default App;
