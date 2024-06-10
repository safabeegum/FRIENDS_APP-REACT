import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddFriend/>}/>
      <Route path='/view' element={<ViewFriends/>}/>

      </Routes></BrowserRouter>
   
  );
}

export default App;
