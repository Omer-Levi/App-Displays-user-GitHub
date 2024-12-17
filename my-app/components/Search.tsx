import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
            <TextField onChange={changeHandler} id="filled-basic" label="Please type user name in GitHub" variant="filled" />
            <hr />
            <Button variant="contained" onClick={clickHandler}>Submit</Button>
        </div>
    )
}

export default Search