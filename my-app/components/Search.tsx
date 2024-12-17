import * as React from 'react';
import { useState } from 'react';
import '../style/Search.css'

type propsInfo = {
    onSearch: (user: string) => void;
}

function Search(props: propsInfo):JSX.Element{
    const [text, setText] = useState<string>('');
    
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function clickHandler(): void {
        if (text.trim()) {
            props.onSearch(text);
        }
    }
    
    return(
        <div>
            <div id="search">
            <input onChange={changeHandler} id="search" type="search" placeholder="Please type user name in GitHub"></input>
            </div>
            <div>
            <button onClick={clickHandler} id="search">Submit</button>
            </div>
        </div>
    )
}

export default Search