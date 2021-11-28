import React from "react";
import logo from "./Header/img/Logo.png";
class App extends React.Component{

  
  
  
  
  
  render(){
    return(
      <div className="Header">
        <img src={logo} alt="Logo Elizabeth" width="250" height="80"/>
        <navigator>
          <ul type="disc">
            <li >Inicio</li>
            <li>Servicios</li>
            <li>Citas</li>
            <li>Resumen</li>
            <li>Login</li>
          </ul>
        </navigator>
      </div>
    
    );
  }
}

export default App;
