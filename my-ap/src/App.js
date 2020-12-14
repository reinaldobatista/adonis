import React from 'react';
import Header from '../src/components/header/header';
import Routes from './routes';
import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <div className="App">
     <Header />
     <Routes />
    </div>
  );
}

export default App;
