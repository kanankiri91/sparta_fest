import React from "react";
import './login.css'

const Login = () => {
  return (
    <>
    <div className="belakang">
      <div class="container" id="main">

      <div class="sign-in">
        <form action="#">
          <h1>Masuk</h1><br />
          <input type="text" name="txt" placeholder="Username" required=""/>
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button id="signIn">Masuk</button>
          <button id="signUp">Daftar</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-right">
            <br /><br /><br /><h1>SPARTA FEST 2022</h1>
            <br /><p>Universitas Pertahanan Republik Indonesia "Discover The Wonderland of Indonesia"</p>
            <br /><p>Sentul, 15 - 29 Februari 2022</p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Login;
