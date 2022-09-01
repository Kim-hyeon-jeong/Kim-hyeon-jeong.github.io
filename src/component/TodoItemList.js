import { Component } from "react";
import TodoItem from "./TodoItem.js"

class TodoItemList extends Component{
    render(){
        const {todos,onbRemove,onbToggle} = this.props;
        const todoList = todos.map(({id,text,checked}) => ( //map:배열 반복해서 새로만들어내기
            <TodoItem id={id} text={text} checked={checked} onaRemove={onbRemove} onaToggle={onbToggle}/>
            )
        )
        return(
            <div>
                {todoList}    
            </div>
        )
    }
}

export default TodoItemList;