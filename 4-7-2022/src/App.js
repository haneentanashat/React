import React from "react";
import UserContext from "./components/UserContext";
import BGcolor from './components/BGcolor';
const randomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
class App extends React.Component {
  

   render() {
 const state=document.body.style.background = randomColor();

    return (
 
    <UserContext.Provider  value={state}>
    {
      <>
      
    <BGcolor />
    </>
    }
  </UserContext.Provider>
  
  );
}
}

export default App;
