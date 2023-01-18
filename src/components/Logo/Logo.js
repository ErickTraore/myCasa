import React from "react";
import '../../style/Logo.scss';
import bigVectorK from '../assets/big/VectorK-55.png'
import smallVectorMaison from '../assets/small/plancheUneSmall-287.png';
import bigVectorMaison from '../assets/big/plancheUneBig.png';


export default function Logo() {
  return (
    <div class="group">
          <div class="group__logo">
            <div class="group__logo__K">
            <img  srcSet={`${smallVectorMaison} 287w,
                            ${bigVectorMaison} 402w`
                         }
                        src={`${bigVectorK}`} alt=""
                        sizes={`(max-width: 320px) 287px, (min-width: 321px) 402px, 402px`} 
                        />
            </div> 
        
          </div> 
        </div>
)};