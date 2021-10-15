import React, { useContext } from "react";

import { LanguageContext } from "../libs/language";
import { languageOptions } from "../languages/dictionaryList";

export default function LanguageSelector(){
    const { userLanguage, userLanguageChange } = useContext(LanguageContext)

    const handleLanguageChange = e => userLanguageChange(e.target.value);

    return (
        <select
            onChange={handleLanguageChange}
            value={userLanguage}
            >
                {Object.entries(languageOptions).map(([id, name]) => <option key={id} value={id}>{name}</option>)}
            </select>
    );
};