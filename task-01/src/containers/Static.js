import React from 'react';
import { Text } from '../libs/language';

function Static(props) {
    const text = "someContent";
    const arr = [];

    for(let i=0;i<20;i++){
        arr.push(text);
    }

    return ( props.isActive ? (
        <div>
            <Text tid="selectedLanguage"/><br/><br/>
            {Object.entries(arr).map(([id,text]) => <Text key={id} id={id} tid={text} />)}
        </div>) : null
    )
}

export default Static
