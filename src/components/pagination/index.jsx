import "./index.css";


export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return <div className="pagination">
        <nav>
        <ul className="pagination-list">
            {pageNumbers.map(number => {
                return <li key={number} className="pagination-item">
                    <a onClick={() => paginate(number)}className="page-link">{number}</a>
                </li>
        })}
        </ul>
        </nav> 
    </div>
}

