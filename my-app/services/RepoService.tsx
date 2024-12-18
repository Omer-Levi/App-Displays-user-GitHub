

async function RepoService(user:string){

    const url = `https://api.github.com/users/${user}/repos`;
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export default RepoService;