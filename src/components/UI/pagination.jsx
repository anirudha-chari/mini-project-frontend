const Pagination = ({ postsPerPage, totalPosts, setcurrentpage }) => {
    const pageNumbers = []
    const paginate = (pagenumber) => { setcurrentpage(pagenumber) }
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="row">
            <ul className="pagination justify-content-center" >
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