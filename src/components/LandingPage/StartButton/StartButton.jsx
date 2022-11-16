import React from "react";
import './StartButton.css';
import { NavLink } from "react-router-dom";

export default function StartButton(){
    return(
        <NavLink to="/home" className="Link">
            <div className="box-3">
                <div className="btn btn-three">
                    <span>START</span>
                </div>
            </div>            
        </NavLink>
    )
};