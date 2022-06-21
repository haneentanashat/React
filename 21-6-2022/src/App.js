import React from 'react';
import Body from './components/Body';
import Nav from './components/Nav';
import Title from './components/Title';
import Img from './components/Img';
function App() {
  return (
   <div className='container'>
       <Nav />
       <Title />
       <Body />
       <Img />

   </div>
  );
}

export default App;
