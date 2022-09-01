import "./TodoListTemplate.css"

const TodoListTemplate = ({sendForm, children}) =>{
    //children은 app.js의 todoItemList가 자식요소로 들어가있으므로 변수처리함
    // (props) =>{}
    // ({sendForm})=>{}
    return(
        <div className="todoWrap">
            <h1>TODAY TODOS</h1>
            <section className="formWrap">
                {sendForm}
            </section>
            <section className="todoLists">{children}</section>
        </div>
    )
}

export default TodoListTemplate;