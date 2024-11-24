import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Conctact/Contact';
import Footer from './components/Footer/Footer';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
