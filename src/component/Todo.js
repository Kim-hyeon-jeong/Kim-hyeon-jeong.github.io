import {Component} from "react";
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import TodoListTemplate from "./TodoListTemplate";

//모든컴포넌트는 js파일로 독립해서 저장한다. 짜집기해서 연결해 사용한다
class Todo extends Component {
  //1.
  //목록 개수를 체크할 변수 만들기
  id=3;
  state = {
    input:"",
    todos:[ //객체만들기
      {id:0,text:"리액트 복습하기",checked:false},
      {id:1,text:"이력서 쓰기",checked:false},
      {id:2,text:"운동하기",checked:false}
    ]
  }
  //2.
  //input의 내용물 value로 넣는 함수
  handleChange =(e) =>{
    this.setState ({
      input:e.target.value //입력한 데이터가 들어간다
    })
  }
  //입력한 데이터를 todos에 넣는 함수
  handleCreate =(e) =>{
      const {input,todos} = this.state;
      this.setState({
        input:"",
        todos:todos.concat({
          id:this.id++,
          text:input,
          checked:false
        })
      })
    }

  handleRemove = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id) 
      //리무브 누른것 id와 같지 않은것들만 오려서 새로 배열만들기. 
      //filter 는 조건에 맞게 배열을 조작해 새로 만든다
    })
  }
  handleToggle = (id) =>{
    const {todos} =this.state;
    //클릭한 요소의 순서 위치값 찾기
    const index = todos.findIndex(todo => todo.id === id);
    console.log(index);
    const selected = todos[index]
    //배열 복사하기 spread 연산자
    const copyTodos = [...todos];
    console.log(copyTodos);
    copyTodos[index]={
      ...selected,
      checked:!selected.checked
    }
    console.log(copyTodos);
    this.setState({
      todos:copyTodos
    })
  }

  //3.붙일내용
  render(){ 
    const {input,todos} = this.state;
    return (
      <div className="innerBox">
        <div className="container">
            {/* <span>Todo List</span> */}
            <h2>Todo List</h2>
            <TodoListTemplate sendForm ={
                <Form value={input} 
                    onaChange={this.handleChange} 
                    onaCreate={this.handleCreate}/>}>
            <TodoItemList todos={todos} 
                onbRemove={this.handleRemove}
                onbToggle={this.handleToggle}/>
            </TodoListTemplate>
        </div>
      </div>
    );
  }
}

export default Todo;
