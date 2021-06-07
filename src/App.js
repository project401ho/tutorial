import './App.css';
import React , {Component} from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Control from './components/Control'

class App extends Component {
  constructor(props){
    super(props)
    this.max_content_id = 3;
    this.state={
      mode:"welcome",
      subject: {title:"WEB", sub: "world wide web"},
      welcome: {title:"Welcome", desc: "HELLO REACT"},
      selected_content_id: 0,
      contents: [
        {id: 1, title: "HTML", desc: "HTML is Hyper Text Markup Language"},
        {id: 2, title: "CSS", desc: "CSS is for decoration"},
        {id: 3, title: "JavaScript", desc: "JS is for dynamic webpage"}
      ]
    }
  }
  getContent(){
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode ==="read"){
      let _content = this.state.contents[this.state.selected_content_id-1]
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === "create"){
      _article = <CreateContent submitHandler={(_title, _desc)=>{
        this.max_content_id++
        let temp = this.state.contents.concat({id:this.max_content_id,title:_title,desc: _desc})
        this.setState({
          mode:"read",
          contents:temp,
          selected_content_id : this.max_content_id
        })

      }}></CreateContent>
    }
    else if(this.state.mode === "update"){
      let _content = this.state.contents[this.state.selected_content_id-1]
      _article = 
      <UpdateContent 
      contentsubmitHandler={(_id,_title, _desc)=>{       
        let _contents =  [...this.state.contents]
        _contents[_id-1] = {id:_id,title:_title,desc:_desc}
        console.log(this.state.contents)
        console.log(_contents)
        this.setState({          
          mode:"read",          
          contents:_contents
        })}}
      data = {_content}
      ></UpdateContent>
    }
    return _article
  }
  render(){
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
        <Control onChangeMode = {(_mode)=>{
          
          if(_mode === "delete" && this.state.selected_content_id !== 0){
            
            let warning_str = this.state.contents[this.state.selected_content_id-1].title
            if(window.confirm(warning_str + "를 정말 지우시겠습니까?")){
              let _contents = [...this.state.contents]
              _contents.splice(this.state.selected_content_id-1,1)
              this.setState({contents:_contents, mode: "welcome"})
            }
          }
          else{
            this.setState({mode: _mode})
          }
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
          {this.getContent()}
        
      </div>
    );
  }
  
}

export default App;
