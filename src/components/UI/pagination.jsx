const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination" >
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button type="button" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination