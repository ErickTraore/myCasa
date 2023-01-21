import React from "react";
import '../../style/Displaying.scss';
import logo from '../assets/Img.png';


export default  function Displaying() {
    return (
        <div >
            <div>
                <img src={logo} alt="" className='displaying' />
            </div>
            <p> Je suis un yankee </p>
        </div>
    )
};