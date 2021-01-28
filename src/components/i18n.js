import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from './locales/en/translationEN.json'
import translationJP from './locales/jp/translationJP.json'


const resources = {
    en : {
        translation : translationEN
    },
    jp : {
        translation : translationJP
    }
};

i18n
 
.use(initReactI18next)  //passes i18n down to react-i18n
.init({
    resources,
    lng :'en',



    keySeparator: false, //we do not use keys in form messages.welcome

    interpolation: {
        escapeValue: false //react always safes from xss
    }
});

export default i18n;
