import ItemList from "./ItemList";

type propsInfo = {
    listApi: any[];
}

function List(props: propsInfo): JSX.Element{
    let rows: JSX.Element[] = [];
    const repos = props.listApi || [];
    
    repos.map((repo, index) => rows.push(<ItemList key={index} repo={repo} />))
    
    return(
        <div>
            {rows.length > 0 && (
                <div>
                    There are {rows.length} open Repositories.
                </div>
            )}
            <div>
                {rows}
            </div>
        </div>
    )
}

export default List;