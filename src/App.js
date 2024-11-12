import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'


function App() {
  return (
    <div className='main=website'>
      <div className='container'>
        <BrowserRouter>

          <Header>

          </Header>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
