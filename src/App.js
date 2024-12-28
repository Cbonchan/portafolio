// App.js
import React from 'react';
import Menu from './components/Menu';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <main>
      <div>
        <Title />
      </div>
      
      <div>
        <Menu />
      </div>
    </main>
  );
}

export default App;
