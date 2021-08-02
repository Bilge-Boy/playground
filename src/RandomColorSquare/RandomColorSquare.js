import "./RandomColorSquare.css"
import { useState } from "react";

export default function RandomColorSquare(){

    function randomizeColor(){
        return "#" + Math.floor(Math.random()*16777215);
    }

    function setBg(){
        const cube = document.getElementById("square");
        cube.style.background = randomizeColor(); 
      }

    return <div id = "square" onClick={setBg}>

    </div>
}