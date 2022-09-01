import "./form.css"
const Form = ({value, onaChange, onaCreate}) =>{
    //value값을 넣으면 input창에 데이터입력이 안된다(""였기때문)
    // 그럼 온체인지와 메서드호출을 한다
    //onaChange 부모에 전달하는호출
    return(
        <div className="inputForm">
            <input type="text" value={value} onChange={onaChange}/>
            <button onClick={onaCreate}>ADD</button>
        </div>
    )
}
export default Form;