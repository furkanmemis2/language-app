import React from "react";
import i18n from "i18next";



function LanguageChangeComponent(){

    const changeLanguage = (lang) =>{
        console.log(lang);
        i18n.changeLanguage(lang);
    };

    return(
        <div>
            <button onClick={()=>{
                changeLanguage("eng");
            }}>English</button>
            <button onClick={()=>{
                changeLanguage("tr");
            }}>Turkish</button>
        </div>
    )


}


export default LanguageChangeComponent;