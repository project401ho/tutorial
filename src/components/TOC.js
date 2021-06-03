import {Component} from 'react';


class TOC extends Component{
render(){
    let data = this.props.data
    let lists = []
    data.forEach(item=>{
        lists.push(
        <li key={item.id}>
            <a 
                href={"/content/"+item.id}
                // data-id 는 event 객체 내 타겟안에 데이터셋 안에 있음
                // data-id = e.target.dataset.id
                // data-walla = e.target.dataset.walla
                data-id = {item.id}
                onClick={(e)=>{
                    e.preventDefault();                    
                    this.props.onChangeContent(e.target.dataset.id);
                }}
            >
                {item.title}
            </a>
        </li>
        )
    })
    return(
    <nav>
        <ul>
            {lists}
        </ul>
    </nav>
    )
    }
}

export default TOC