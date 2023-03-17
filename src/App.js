import './App.css';
import {useState,useEffect} from "react"
import Axios from "axios"
function App() {
  
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  const [excuse,setExcuse] = useState(null)
  const fetchData = (role) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${role}/`).then((res) => {
      setExcuse(res.data[0])
      console.log(res.data[0].category)
    })
  }
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
    <div>
      <button onClick={() => fetchData("family")}>
        Family
      </button>
      <button onClick={() => fetchData("office")}>
        Office
      </button>
      <button onClick={() => fetchData("children")}>
        Children
      </button>
    </div>
    <h1>{excuse? excuse.excuse:"No data"}</h1>
  </div>
}
export default App;
