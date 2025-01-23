import React from "react";
import Quotes from "./Quotes";
import "./Home.css";
import xxxx from "./imagesfolder/xxxx.jpg";
import f72ae356ac688cf2df59eb6b15b7981f from "./imagesfolder/f72ae356ac688cf2df59eb6b15b7981f.jpg"
import yichan2 from "./imagesfolder/yichan2.jpg"
import f15e98fe35d8bbc902e82f8d2028c402 from "./imagesfolder/f15e98fe35d8bbc902e82f8d2028c402.jpg"
import hismom from "./imagesfolder/hismom.jpg";
import sonadndaugh from "./imagesfolder/sonanddaug.jpg";
import daughter from "./imagesfolder/daughter.jpg";
import son from "./imagesfolder/son.jpg";
import watermelonsugar from "./imagesfolder/watermelonsugar.jpg";
export default function Character(){
  return (
    <>  
    <div className="grids">
      <div className="r-1">
          <div className="cl-2">
            <img src={f72ae356ac688cf2df59eb6b15b7981f} alt="" className="yichan" />
            <img src= {hismom}alt="" />
            <img src={f15e98fe35d8bbc902e82f8d2028c402} alt="" />
            <img src={ yichan2} alt=""  className="yichan"/>
            </div>
          <Quotes/>
        </div>
        <div className="center">
          <p className="quo">Life didn’t have to be perfect for it to shine. 
          It’s the little moments that make your life twinkle, and happiness is 
          what you experience when those moments come together.</p>

        <img src={xxxx} alt="xxxx"  className="xx"/>
        </div>
        <div className="r-1 ">
        <div className="cl-2">
        <img src={sonadndaugh} alt="sonanddaughter" className="eun"/>
        <img src={daughter} alt="daughter" className="eun daughter" />
        <img src={son} alt="son"  className="eun"/>
        <img src={watermelonsugar} alt="watermelonsugar"  className="eun daughter"   />
          </div>
          
          <Quotes/>
          
        </div>
       </div>
    </>
  )



}