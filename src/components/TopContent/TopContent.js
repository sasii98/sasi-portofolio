import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css";
import {useTranslation} from "react-i18next";

const TopContent = () => {
    const{t, i18n} = useTranslation();
    return (
        <div className="topContent">
        <div className="topContent__container">
        <h1>{t('name')}</h1>
        <p>{t('job_description')}</p> <pre />
        <p>{t('job__description')}</p>
        <a href="https://drive.google.com/drive/folders/1viImNoU6k2UaNNcmjbH1ORR9J2_rLw1h?usp=sharing" target="_blank"  rel="noopener noreferrer">
            <button className="topContent__downloadButton">{t('resume')}</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
        <button className="topContent__workButton">{t('content')}</button>
        </Link>
        </div>
     </div>
    )
}

export default TopContent
