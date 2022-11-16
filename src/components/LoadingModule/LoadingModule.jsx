import React from "react";
import './LoadingModule.css';

      export default function LoadingModule() {
              return(
                <div className="containerLoading">
                        <div className="containerImgLoading">
                                <img src="https://www.gifss.com/videojuegos/god-of-war/images/god-of-war-03.gif" alt='LoadingPage'/>                                
                        </div>
                        <div className="containerMsgLoading">
                                <h1>Loading...</h1>
                        </div>
                </div>
              )
        

    }