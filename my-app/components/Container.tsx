import { useState } from "react";
import Search from "./Search";
import RepoService from '../services/RepoService'

function Container():JSX.Element{
    const [repo, setRepo] = useState<any>(null);

    async function handleSearch(user: string) {
        const repoData = await RepoService(user);
        setRepo(repoData);
        console.log(repoData);
    }


    return (
        <Search onSearch={handleSearch}/> 
    )
}


export default Container;