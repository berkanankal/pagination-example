import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-3">
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() => paginate((prev) => (prev === 1 ? prev : prev - 1))}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((p, i) => (
          <li
            className={currentPage === p ? "page-item active" : "page-item"}
            key={i}
            onClick={() => paginate(p)}
          >
            <button className="page-link">{p}</button>
          </li>
        ))}

        <li
          className={
            currentPage === pageNumbers.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() =>
              paginate((prev) =>
                prev === pageNumbers.length ? prev : prev + 1
              )
            }
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
