
function Search({params}) {
    return (
        <div>
            <input type="text" value={params.search} />
        </div>
    )
    
}

Search.propTypes = {
    params: propTypes.shape({
        search: propTypes.string
    })
}

export default Search;