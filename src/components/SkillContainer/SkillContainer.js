import React from 'react'
import {Element} from "react-scroll"
import skills from "../../assets/skill.jpeg"
import LinearProgress  from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"
import {useTranslation} from "react-i18next";

const SkillContainer = () => {
  const{t, i18n} = useTranslation();
    return (
      <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
      <img src={skills} alt=""/>
       </div>
       <div className="skillContainer__text">
       <h2>{t('skill_set')}</h2>
       <div className="skillContainer__skillSet">
         <h5>React JS</h5>
   
       <div className="skillContainer__slider skillContainer__slider1">
       <LinearProgress variant="determinate" value={70} />
       </div>
        </div>
        <div className="skillContainer__skillSet">
         <h5>React Native</h5>
   
       <div className="skillContainer__slider skillContainer__slider1">
       <LinearProgress variant="determinate" value={75} />
       </div>
        </div>
        <div className="skillContainer__skillSet">
         <h5>HTML,CSS</h5>
   
       <div className="skillContainer__slider skillContainer__slider2">
       <LinearProgress variant="determinate" value={60} />
       </div>
        </div>
        <div className="skillContainer__skillSet">
         <h5>Adobe XD</h5>
   
       <div className="skillContainer__slider skillContainer__slider3">
       <LinearProgress variant="determinate" value={60} />
       </div>
        </div>
        <div className="skillContainer__skillSet">
         <h5>Rest API</h5>
   
       <div className="skillContainer__slider skillContainer__slider4">
       <LinearProgress variant="determinate" value={70} />
       </div>
        </div>
        </div>

      </Element>
    )
}

export default SkillContainer
