import React from "react";

interface Props {
  currentPage: number;
  maxpage: number;
  onClickPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ maxpage, currentPage, onClickPage }) => {
  const shortPagination = () => {
    return Array(maxpage)
      .fill(0)
      .map((_, key) => (
        <li className={`page-item ${key + 1 === currentPage ? "active" : ""}`} key={key}>
          <div className="page-link" role="button" onClick={() => onClickPage(key + 1)}>
            {key + 1}
          </div>
        </li>
      ));
  };

  const longPagination = () => {
    if (maxpage - currentPage < 4) {
      const array = [1, 2].concat(
        Array(4)
          .fill(0)
          .map((_, key) => maxpage - (3 - key))
      );

      return array.reduce((acc, page, key) => {
        acc.push(
          <li className={`page-item ${page === currentPage ? "active" : ""}`} key={key}>
            <div className="page-link" role="button" onClick={() => onClickPage(page)}>
              {page}
            </div>
          </li>
        );
        if (key === 1)
          acc.push(
            <li className={`page-item disabled`} key={`${key}dot`}>
              <div className="page-link">...</div>
            </li>
          );
        return acc;
      }, [] as JSX.Element[]);
    } else if (currentPage <= 4) {
      const array = [1, 2, 3, 4, maxpage - 1, maxpage];
      return array.reduce((acc, page, key) => {
        acc.push(
          <li className={`page-item ${page === currentPage ? "active" : ""}`} key={key}>
            <div className="page-link" role="button" onClick={() => onClickPage(page)}>
              {page}
            </div>
          </li>
        );
        if (key === 3)
          acc.push(
            <li className={`page-item disabled`} key={`${key}dot`}>
              <div className="page-link">...</div>
            </li>
          );
        return acc;
      }, [] as JSX.Element[]);
    } else {
      const array = [1, 2, currentPage - 1, currentPage, currentPage + 1, maxpage - 1, maxpage];
      return array.reduce((acc, page, key) => {
        acc.push(
          <li className={`page-item ${page === currentPage ? "active" : ""}`} key={key}>
            <div className="page-link" role="button" onClick={() => onClickPage(page)}>
              {page}
            </div>
          </li>
        );
        if (key % 3 === 1)
          acc.push(
            <li className={`page-item disabled`} key={`${key}dot`}>
              <div className="page-link">...</div>
            </li>
          );
        return acc;
      }, [] as JSX.Element[]);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <div className="page-link" onClick={() => onClickPage(currentPage - 1)} role="button">
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {maxpage > 5 ? longPagination() : shortPagination()}
        <li className={`page-item ${currentPage === maxpage ? "disabled" : ""}`}>
          <div className="page-link" onClick={() => onClickPage(currentPage + 1)} role="button">
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
