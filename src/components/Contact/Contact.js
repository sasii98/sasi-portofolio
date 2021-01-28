import React from 'react'
import {Element} from "react-scroll"
import {Facebook,Instagram,LinkedIn} from "@material-ui/icons"
import { IconButton } from '@material-ui/core'
import "./Contact.css"
import {useTranslation} from "react-i18next";

const Contact = () => {
    const{t, i18n} = useTranslation();
    return (
       <Element className="contact" id="contact">
       <h1>{t('contact')}</h1>
       <div className="contact__container">
           <p>
               {t('email')} : <span>mail2sasi98@gmail.com</span>
           </p>
         <p>
             Github {t('username')} : <span>@sasii98</span>
         </p>
        <div className="contact__icons">
        <a href="https://www.linkedin.com/in/sasii98"   target="_blank"  rel="noopener noreferrer">
            <IconButton>
                <LinkedIn />
            </IconButton>
        </a>
        <a href="https://www.facebook.com/sasiii98" target="_blank"  rel="noopener noreferrer">
            <IconButton>
                <Facebook />
            </IconButton>
        </a>
        <a href="https://www.instagram.com/s_a_s_iii._" target="_blank"  rel="noopener noreferrer">
            <IconButton>
                <Instagram />
            </IconButton>
        </a>

        </div>
       </div>
       </Element>
    )
}

export default Contact
