import "./Pagination.css"

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages).keys()].map((x) => <button disabled={x + 1 == page} onClick={() => changePage(x + 1)}> {x + 1}</button>);
  } else {
    if (page <= 3) {
      middlePagination = [...Array(5).keys()].map((x) => <button disabled={x + 1 == page} onClick={() => changePage(x + 1)}> {x + 1}</button>);
    } else if (page > pages - 3) {
      middlePagination = [...Array(5).keys()].map((x) => <button disabled={x + pages - 4 == page} onClick={() => changePage(x + pages - 4)}> {x + pages - 4}</button>);
    } else {
      middlePagination = [...Array(5).keys()].map((x) => <button disabled={x + page - 2 == page} onClick={() => changePage(x + page - 2)}> {x + page - 2}</button>);
    }
  }
  


  // middlePagination = [...Array(pages).keys()].map((x) => <button disabled={x+1 == page} onClick={() => changePage(x+1)}> {x+1}</button>);
  // middlePagination = middlePagination.slice(page-1 , page + 4);


  return page > 1 || page < pages ? (
    <div className="pagination">
       <button className="paginatin__previous" disabled={page===1} onClick={() => changePage(page - 1)}> &#171;</button>
      {middlePagination}
      <button className="pagination__next" disabled={page===pages}  onClick={() => changePage(page + 1)}>&#187; </button>

    </div>
  ) : null
}

export default Pagination