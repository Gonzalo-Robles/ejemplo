//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
  <div className="App">
    <Navbar colorTitle='red'/>
    <ItemListConteiner greeting='Un texto X que se envia de prop '/>

  </div>
  );
}

export default App;
