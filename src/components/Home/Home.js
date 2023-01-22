import React from "react";
import small from '../assets/mAccueil-320.png';
import medium from '../assets/mAccueil-425.png';
import large from '../assets/mAccueil-768.png';
import xlarge from '../assets/mAccueil-1240.png';
import '../../style/Home.scss';
import BasicExample from "../../components/BasicExample/BasicExample";
// import ShoppingList from "../../components/ShoppingList/ShoppingList";


export default function Home() {
    return (       
        <div className="Home">
            <div className="Home__view">
                <img  srcSet={`${small} 320w, 
                               ${medium} 425w, 
                               ${large} 768w, 
                               ${xlarge} 1240w`
                                }
                    src={`${medium}`} alt=""
                    sizes={`(max-width: 321px) 320px, (max-width: 426px) 425px, (max-width: 769px) 768px, 1240px`} />
                <div className="Home__view__content">
                    <p>Chez vous, partout et ailleurs</p>
                </div>           
            </div> 
            <div className="Home__shopping">
                  <BasicExample />
            </div>          
        </div>
        )  
}