import './App.css';
import { Cat } from './components/Cat';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient(
  {
    defaultOptions : {
      queries : {
        refetchOnWindowFocus : false,
      }
    }
  }
)

function App() {
  //thằng dependencies không phải là một giá trị mà nó là một cái biến, useEffect sẽ được gọi lại khi các biến dependencies thay đổi
  //onclick event trong này phải gọi hàm trống rồi truyền hàm khác vào
  return <div className = "App">
    <QueryClientProvider client={client} >
      <Cat></Cat>
    </QueryClientProvider>
  </div>
}
export default App;
