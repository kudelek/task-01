import React from 'react';
import { Text } from '../libs/language';

function Static(props) {
    const text = "somecontent";
    const arr = [];

    for(let i=0;i<20;i++){
        arr.push(text);
    }

    return (
        <div {...props}>
            <Text tid="selectedlanguage"/><br/><br/>
            {Object.entries(arr).map(([id,text]) => <Text key={id} id={id} tid={text} />)}
        </div>
    )
}

export default Static
