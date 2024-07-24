//import logo from './logo.svg';

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { DashBoard } from './modules/dashboard/pages/DashBoard';
import { Provider } from 'react-redux';
import store from './shared/store/store'
//import { NotePage } from './modules/pages/NotePage';

function App() {
  return(
    <Provider store={store}>
  <BrowserRouter>
    <DashBoard/>
    </BrowserRouter>
    </Provider>
   
  )
}

export default App;
