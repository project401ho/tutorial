import './App.css';
import React , {Component} from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import Control from './components/Control'

class App extends Component {
  constructor(props){
    super(props)
    this.max_content_id = 3;
    this.state={
      mode:"create",
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
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode ==="read"){
      _title = this.state.contents[this.state.selected_content_id-1].title
      _desc = this.state.contents[this.state.selected_content_id-1].desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === "create"){
      _article = <CreateContent submitHandler={(_title, _desc)=>{
        this.max_content_id++
        let temp = this.state.contents.concat({id:this.max_content_id,title:_title,desc: _desc})
        this.setState({
          mode:"read",
          contents:temp,
        })

      }}></CreateContent>
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
        <Control onChangeMode = {(str)=>{
          this.setState({mode:str})
        }}>

        </Control>
        <TOC 
          data = {this.state.contents} 
          onChangeContent = {(id)=>{
            this.setState({
              mode:"read",
                selected_content_id : Number(id)
              })
          }}
          ></TOC>
          {_article}
        
      </div>
    );
  }
  
}

export default App;
