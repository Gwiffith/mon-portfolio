import React from 'react';
import Navigation from './components/Navigation';
import MyRouter from './MyRouter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
      <MyRouter />
      </main>
    </div>
  );
}

export default App;
