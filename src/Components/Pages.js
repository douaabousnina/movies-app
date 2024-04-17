import React from "react";
import ReactPaginate from "react-paginate";

export const Pages = ({ fetchPageMovies }) => {
  const handlePageClick = (page) => {
    fetchPageMovies(page.selected + 1);
  };

  const pageCount = 1000;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName="page-link"
      nextClassName="page-item"
      previousClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};
