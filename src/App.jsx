import {useState} from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){

  function showDummyAlert(){
    alert("I am Working");
  }

  return(
    <>
    <Header username={"Syed Aashir Ali"}
     showDummyAlert={showDummyAlert}
    />

    <h1>Hello Today we will do components</h1>
    <Footer/>
    </>
  );
}

export default App;