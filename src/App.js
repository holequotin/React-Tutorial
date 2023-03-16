import './App.css';
import {useState, useEffect} from "react"
import Axios from "axios"
function App() {
  
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  const [catFact,setCatFact] = useState("")
  const [generate,setGenerate] = useState(true)
  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact)
  })
  },[generate])
  return <div className = "App">
    <div>
      <button onClick={() => {
        setGenerate(!generate)
      }}>
        Generate Cat Fact
      </button>
    </div>
    <h1>{catFact}</h1>
  </div>
}
export default App;
