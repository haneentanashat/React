import React from 'react';
import Cards from './components/Cards';
//import Body from './components/Body';
import Nav from './components/Nav';

//import Title from './components/Title';
//import Img from './components/Img';
function App() {
  return (
   <div className='container'>
       <Nav />
       <Cards image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" title="Alaa " text="Some quick example text to build on the card title and make up the bulk of the card's content." />
       <Cards image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" title="Sami" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
       <Cards image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" title="Ali" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
       <Cards image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" title="Moath" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

   </div>
  );
}

export default App;
