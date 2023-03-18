import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { createContext, useState } from 'react';

export const AppContext = createContext();
function App() {
  const [username,setUserName] = useState("Ho Le Quoc Tin")
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
    <AppContext.Provider value={{username,setUserName}}>
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/*Sử dụng component bên trong thằng element*/}
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
      </Routes>
    </Router>
    </AppContext.Provider>
  </div>
}
export default App;
