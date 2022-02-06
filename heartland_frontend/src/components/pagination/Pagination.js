import React from "react";
import { PaginationNav } from "./Pagination.styles";

const Pagination = ({ pages, paginate, neighbors = 2, current }) => {
  const pageNumber = [];

  for (let i = current - neighbors; i <= current + neighbors; i++) {
    if (!(i < 1) && !(i > pages)) pageNumber.push(i);
  }
  return (
    <PaginationNav>
      <ul>
        {current > 1 && (
          <li>
            <a href="#!" onClick={() => paginate(current - 1)}>
              previous
            </a>
          </li>
        )}
        {pageNumber.map((number) => (
          <li key={number} className={number === current ? "active" : ""}>
            <a href="#!" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {current < pages && (
          <li>
            <a href="#!" onClick={() => paginate(current + 1)}>
              next
            </a>
          </li>
        )}
      </ul>
    </PaginationNav>
  );
};

export default Pagination;
