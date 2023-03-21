import './App.css';
import { Form } from './components/Form';

function App() {

  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
      <Form>
        
      </Form>
  </div>
}
export default App;
