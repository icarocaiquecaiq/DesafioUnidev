import { Outlet } from "react-router-dom"



function MyComponent(){
    return(
        <div className="container-lg todo_conteudo_home">
            <Outlet></Outlet>
        </div>
    )
}

export default MyComponent