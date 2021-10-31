import React, { useContext } from "react";
import { Text } from "../libs/language";
import { LanguageContext } from "../libs/language";
import { languageOptions } from "../languages/dictionaryList";
import './LanguageSelector.css';

export default function LanguageSelector(props) {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext)

    const handleLanguageChange = e => userLanguageChange(e.target.value);

    return (
        <div {...props}>
            <div className="langtext"><Text tid="language" /></div>
            <select
                aria-label="Language Selector"
                onChange={handleLanguageChange}
                value={userLanguage}
            >
                {Object.entries(languageOptions).map(([id, name]) => <option key={id} value={id}>{name}</option>)}
            </select>
        </div>
    );
};