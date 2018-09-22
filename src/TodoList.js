import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem'
//定义一个react的组件
class TodoList extends Component {

    constructor(props){
    	super(props);
    	this.state={
           list:[],
           inputValue:''
    	}
    	this.handleInputChange=this.handleInputChange.bind(this);
    	this.handleBtnClick=this.handleBtnClick.bind(this);
    	this.handDel=this.handDel.bind(this);
    }


    handleBtnClick(){
    	this.setState({
    		list:[...this.state.list,this.state.inputValue],
    		inputValue:''

    	})
    }
    handleInputChange(e){
    	this.setState({
    		inputValue: e.target.value
    	})
    }

    handDel(index){
    	console.log(index);
    	const list= [...this.state.list];//拷贝list
        list.splice(index,1);
        this.setState({list})
    }


    getTodoItems(){
    	return (
			this.state.list.map((item,index)=>{
			                        return <TodoItem handDel={this.handDel} key={index} content={item} index={index}/>
			                    })
    		)

    }
	render() {
  	//jsx语法
  	return (
  		<Fragment>
	  		<div >
		  		<input value={this.state.inputValue} onChange={this.handleInputChange}/>
		  		<button className='btn_red' onClick={this.handleBtnClick}>添加</button>
	  		</div>
	  		<ul>
		  		{this.getTodoItems()}
  		    </ul>
  		</Fragment>
  		);
  }
}
//导出组件
export default TodoList;
	