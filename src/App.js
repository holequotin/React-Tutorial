import './App.css';
import {useState, useEffect} from "react"
import Axios from "axios"
function App() {
  
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age)
    })
  }
  return <div className = "App">
    <div>
      <input type="text" placeholder='Enter name' onChange={(event) => {
          setName(event.target.value)
      }}></input>
    </div>
    <div>
      <button onClick={fetchData}>
        Predict Age
      </button>
    </div>
    <h1>{age? age:"No data"}</h1>
  </div>
}
export default App;
