import React from "react";
import './LandingPage.css';
import Titulo from '../components/LandingPage/Title/Title.jsx';
import StartButton from '../components/LandingPage/StartButton/StartButton.jsx'


////Funcion que va a ser el componente a renderizar como landing page;
export default function LandingPage(emotiveWords){ 

    return(
        <div className="landingPage">
          
            <div className="item1">
              <Titulo/>              
            </div>
            <div className="item2">
              <div className="item3">          
                  <div className="text">“Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.” <span className="pandora">Pandora, ("God of war 3")</span></div>
                  <div className="text">Come in! You can press "START" button and see all details about your favorites videogames.</div>
              </div>
              
              <div className="item4">
                <StartButton/>                              
              </div>
              
            </div>
            

          
        </div>

    )

    }

