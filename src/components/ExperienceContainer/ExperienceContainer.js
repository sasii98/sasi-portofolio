import React from 'react'
import {Element} from "react-scroll"
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"
import {useTranslation} from "react-i18next";

const ExperienceContainer = () => {
    const{t, i18n} = useTranslation();

    return (
       <Element className="experienceContainer" id="exp">
        <h1>{t('experience')}</h1>
        <div className="experienceContainer__info">
            <Experience number="2" title={t('experience1')} />
            <Experience number="4+" title={t('projects1')} style={{backgroundColor:"#f64c08"}}/>
            <Experience number="3+" title={t('clients')} />
        </div>
       </Element>
    )
}

export default ExperienceContainer
