import { Link,Outlet } from "react-router-dom"
import Logo from "../images/logo.png"
//outlet : link된걸 보여주는 명령어. 내용물이 나타나는 곳
//link a 처럼
// /절대경로 맨상단으로 온다
//<img src="images/logo.png" />
const Layout = () =>{
    return(
        <div className="Wrap">
            <header>
                <div className="innerBox">
                    <h1 className="logo"><Link to="/">
                        <img src={Logo}/></Link></h1>
                    <ul id="nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                    </ul>
                </div>
            </header>
            <Outlet /> 
        </div>
    )
}

export default Layout;