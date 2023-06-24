import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    //    console.log(info.pages);
    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            nextLabel="Next"
            previousLabel="Prev"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextClassName="btn btn-primary"
            previousClassName="btn btn-primary"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeclassName="active"
            onPageChange={(data) => {
                console.log(data);
                setPageNumber(data.selected + 1);
            }}
            pageCount={info?.pages}
        />
    );
};

export default Pagination;