import React from "react";
import {Link} from "react-router-dom";
import './AnalizaMain.css'


export default function AnalizaMain(){
    return(
        <div className='analizaContainer'>
            <Link to="/analiza/pojecia-wstepne"><p>Pojęcia wstępne</p></Link>
            <Link to="/analiza/funkcja-jednej-zmiennej"><p>Funkcja jednej zmiennej</p></Link>
        </div>
    );
}