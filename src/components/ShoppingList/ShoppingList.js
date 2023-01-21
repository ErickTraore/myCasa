import React from "react";

import plantList from "../../doc.json";
import '../../style/ShoppingList.scss';
import img1 from '../assets/Img.png';


function ShoppingList() {
    return (
        <div className="shoppingList">
          <ul className="shoppingList__ul">
                  {plantList.map((plant, index) => (
                        <div className="shoppingList__ul__li" key={`${plant}-${index}`}>
                        <div className="shoppingList__ul__li__image">      
                                {/* { <img src={img1} alt="" />} */}
                            </div>    
                        <div className="shoppingList__ul__li__titre">        
                                { plant.id }
                        </div>
                            
                        </div>

                ))}
            </ul> 
        </div>
    )
}
export default ShoppingList
