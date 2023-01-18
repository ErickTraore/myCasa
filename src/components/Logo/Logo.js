import React from "react";
import '../../style/Logo.scss';
import smallVectorK from '../assets/small/VectorK-38.png';
import bigVectorK from '../assets/big/VectorK-55.png'
import smallVectorMaison from '../assets/small/plancheUneSmall-287.png';
import bigVectorMaison from '../assets/big/plancheUneBig.png';
// import smallVectorPorte from '../assets/small/VectorPorte-4.png';
// import bigVectorPorte from '../assets/big/VectorPorte-6.png';
import smallVectorS from '../assets/small/VectorS-29.png';
import bigVectorS from '../assets/big/VectorS-41.png';
import smallVectorA from '../assets/small/VectorA-29.png';
import bigVectorA from '../assets/big/VectorA-42.png';

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
            {/* <div class="group__logo__M">
                    <div class="group__logo__M__Im1"> 
                        <img  srcSet={`${smallVectorMaison} 33w,
                                    ${bigVectorMaison} 47w`
                                    }
                                    src={`${bigVectorMaison}`} alt=""
                                    sizes={`(max-width: 320px) 33px, (min-width: 321px) 47px, 47px`} 
                                    />
                    </div> 
                    <div class="group__logo__M__Im2">                   
                        <img  srcSet={`${smallVectorPorte} 4w,
                                    ${bigVectorPorte} 6w`
                                    }
                                    src={`${bigVectorPorte}`} alt=""
                                    sizes={`(max-width: 320px) 4px, (min-width: 321px) 6px, 6px`} 
                                    />
                    </div> 
            </div> 
             <div class="group__logo__S">
                        <img  srcSet={`${smallVectorS} 29w,
                                ${bigVectorS} 41w`
                                }
                                src={`${bigVectorS}`} alt=""
                                sizes={`(max-width: 320px) 29px, (min-width: 321px) 41px, 41px`} 
                                />
            </div> 
            <div class="group__logo__A">
                        <img  srcSet={`${smallVectorA} 29w,
                                ${bigVectorA} 42w`
                                }
                                src={`${bigVectorA}`} alt=""
                                sizes={`(max-width: 320px) 29px, (min-width: 321px) 42px, 42px`} 
                                />
            </div>  */}
          </div> 
        </div>
)};