import React, { useState } from 'react'
import {Link} from "react-scroll"
import i18n from "../i18n"
import "./Header.css"
import {useTranslation} from "react-i18next";

const Header = () => {
    const{t, i18n} = useTranslation();
    const[color,setcolor]= React.useState(0)
   const changeoption = (value)=>{
       let val = value === 0 ?'en':'jp'
        //    changeLanguage(val)
           setcolor(value)
   }
   const changeLanguage = (ln) => {
    return () => {
        i18n.changeLanguage(ln);
        console.log('......languafge',ln);
        setcolor(ln==="en"?0:1)
    }
}
    return (
     <nav className="header">
       <div className="header__left">
            <h1>Develop<span>er</span></h1>
        </div>
        <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
        <h4>
        {t('about_me')}
        </h4>

       </Link>
       <Link to="skills" smooth={true} duration={500}>
        <h4>
            {t('skills')}
        </h4>

       </Link>
       <Link to="projects" smooth={true} duration={500}>
        <h4>
            {t('projects')}
        </h4>

       </Link>
       <Link to="exp" smooth={true} duration={500}>
        <h4>
            {t('experience')}
        </h4>

       </Link>
       <Link to="contact" smooth={true} duration={500}>
        <h4>
          {t('contact')}
        </h4>

       </Link>
      
        {/* <h4 className="header__rightButton">Join with  Me </h4> */}
        <div className="header__rightButton">
        {/* <select
         className="header__dropdown"
         onChange={(e)=>{
        changeLanguage(e.target.value)
        console.log(">>>>>><<<<<",e.target.value)
         }}
         >
                <option onClick={changeLanguage("en")}  value="en">English</option>
                <option onClick={changeLanguage("jp")}  value="jp">日本語</option>
            </select> */}
            <button onClick={changeLanguage("en")}　style={{backgroundColor:color===0?'#f64c08':'white'}}>English</button>
            <button onClick={changeLanguage("jp")} style={{backgroundColor:color===1?'#f64c08':'white',fontSize:11.5}}>日本語</button>
        </div>
     
    
        </div>

     </nav>
    )
}

export default Header










