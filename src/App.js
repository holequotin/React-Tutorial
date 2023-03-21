import './App.css';
import { useCount } from './hooks/useCount';

function App() {
  const {count,increase,decrease,restart} = useCount(0)
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
  </div>
}
export default App;
