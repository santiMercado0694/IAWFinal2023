import React from "react";
import '../../App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = Array.from({ length: Math.ceil(totalPosts / postsPerPage) }, (_, i) => i + 1);

    return (
        <nav>
            <div className="center">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="#!" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
