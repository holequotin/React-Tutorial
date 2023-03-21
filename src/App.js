import './App.css';
import { useToggle } from './hooks/useToggle';

function App() {
  const [isVisble,toggle] = useToggle(false);
  const [isVisble2,toggle2] = useToggle(true);
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
    <div>
      {/*Lúc này thằng toogle là một biến , truyền thẳng vào thằng onClick */}
      <button onClick={toggle}>Show/Hide</button>
      {isVisble == true && <p>Text 1</p>}

      <button onClick={toggle2}>Show/Hide</button>
      {isVisble2 == true && <p>Text 2</p>}
    </div>
  </div>
}
export default App;
