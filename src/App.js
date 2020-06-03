import React from 'react';
import logo from './logo.svg';


import BookListItem from './components/BookListItem';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginForm />
    </div>
  );
}

export default App;
