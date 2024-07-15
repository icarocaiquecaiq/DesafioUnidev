import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar"
import MyComponent from "./components/MyComponent"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className="d-flex justify-content-between flex-column wrapper_content">
          <NavBar></NavBar> 
          <MyComponent></MyComponent>
          <Footer></Footer>
    </div>
    </>
    
  )
}

export default App
