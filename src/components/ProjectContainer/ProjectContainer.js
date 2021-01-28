import React from 'react'
import {Element} from "react-scroll"
import Project from '../Project/Project'
import "./ProjectContainer.css"
import background from "../../assets/AXRlogo.png"
import coco from "../../assets/coco.jpg"
import {useTranslation} from "react-i18next";

const ProjectContainer = () => {
    const{t, i18n} = useTranslation();

    const projects = [
        {   
            img:background,
            title:`${t('title')}`,
            desc:`${t('des1')}`,
            link:"https://drive.google.com/drive/folders/1g3132EdNLkUFkzoI1MSqz7XdeahuVbMM?usp=sharing"

        },
        {
            img:coco,
            title:`${t('title1')}`,
            desc:`${t('des')}`,
            link:"https://drive.google.com/drive/folders/1YXroJB5CD295cM2Jp2TQSUOGXZuaxKQk?usp=sharing"

        },
     
       
      

    ]


    return (
    <Element className="projectContainer" id="projects">
        <h1>{t('projects')}</h1>
        <p>{t('project_title')}</p>
        <div className="projectContainer__projects">
       {
           projects.map((project,index) =>{
               return(
                  <Project 
                   key={index} 
                   img={project.img}
                   title={project.title}
                    desc={project.desc} 
                    link={project.link} />
               
               )
       })
       }
        </div>
    </Element>
    )
}

export default ProjectContainer
