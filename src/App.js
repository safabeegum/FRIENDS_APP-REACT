import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddFriend from './components/AddFriend';
import ViewFriends from './components/ViewFriends';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/view' element={<ViewFriends/>}/>

      </Routes></BrowserRouter>
   
  );
}

export default App;
