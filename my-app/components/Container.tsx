import { useState } from "react";
import Search from "./Search";
import RepoService from '../services/RepoService';
import List from "./List";
import '../style/Container.css';

function Container(): JSX.Element {
    const [repo, setRepo] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function handleSearch(user: string) {
        setErrorMessage(""); 
        setRepo(null);       
        try {
            const repoData = await RepoService(user);
            if (repoData.message === "Not Found") {
                setErrorMessage("User not found");
            } else {
                setRepo(repoData);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }
    }

    return (
        <div>
            <div id='title'>
                <h2>Enter a UserName to view details on Github</h2>
            </div>
            <Search onSearch={handleSearch} />
            
            {errorMessage ? (
                <div style={{ color: 'red', marginTop: '20px' }}>
                    {errorMessage}
                </div>
            ) : (
                <List listApi={repo} />
            )}
        </div>
    );
}

export default Container;
