import React, { useState, createContext, useContext } from "react";
import { dictionaryList, languageOptions } from "../languages/dictionaryList";

export const LanguageContext = createContext({
    userLanguage: "eng",
    dictionary: dictionaryList.eng
});

export function LanguageProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState("eng")

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : "eng";
            setUserLanguage(newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};

export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid] || tid;
};

export function Input(props) {
    const languageContext = useContext(LanguageContext);
    return <input id={props.id} name={props.name} placeholder={languageContext.dictionary[props.tid] || props.tid} onChange={props.onChange} />
}

export function TextArea(props) {
    const languageContext = useContext(LanguageContext);
    return <textarea type={props.type} id={props.id} name={props.name} placeholder={languageContext.dictionary[props.tid] || props.tid} onChange={props.onChange} />
}