import React from "react";
import Nav from "./Nav";
import Character from "./Characters";
import NPC from "./NPC";
import "./App.css";
import "./Home.css";
import b40335b46b53a6c69867724f29f32fb8 from "./imagesfolder/b40335b46b53a6c69867724f29f32fb8.jpg";
import c45688e652c23d818db8671d9df84694 from "./imagesfolder/c45688e652c23d818db8671d9df84694.jpg";
import f15e98fe35d8bbc902e82f8d2028c402 from "./imagesfolder/f15e98fe35d8bbc902e82f8d2028c402.jpg";
import cded from "./imagesfolder/cded.jpg";
import xxxx from "./imagesfolder/xxxx.jpg"

// import Shape from "./Shape";



export default function Home(){




    return(
        <>
        <div className="Home">
            <Nav/>
            <div className="container">
              {/* <Shape/> */}
              <div>
                    <div className="rectangle">
                        <img src={cded} alt="" className="img0"/>
                        <div></div>
                        <div></div>
                        <img src={xxxx} alt=""  className="img00"/>
                        
                    </div>
                        <div className="text viva">VIvA</div>
                        <div className="text la">LA</div>
                        <div className="text vida">VIdA</div>
                </div>
                     <div className="image-grid">
                           <div className="image-card ">
                            <img src={c45688e652c23d818db8671d9df84694 } className="img-1" alt="Watermelon 1" />
                            </div>
                            <div className="image-card">
                            <img src= {b40335b46b53a6c69867724f29f32fb8} className="img-2" alt="Watermelon 2" />
                            </div>
                            <div className="image-card">
                            <img src= 
                            {f15e98fe35d8bbc902e82f8d2028c402} className="img-3" alt="Scene" />
                            </div>
                          
                           
                         </div>
                <div className="description">
                    ‘Twinkling Watermelon’ tells the story of a CODA boy, Eun Gyeol, who
                    somehow zips back to 1995—the teenage days of his parents. He ends up
                    forming a band with his father and eventually learns the untold stories
                    of his folks back in the day.
                </div>
            </div>
            
            <Character/>
            <NPC/>
            </div>
            
            </>
    )
}