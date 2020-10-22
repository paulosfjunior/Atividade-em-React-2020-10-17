import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Titulo from './titulo';
import ContactList from './contatos/contactList';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo />
      </div> */}
      <div className="App-body">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
