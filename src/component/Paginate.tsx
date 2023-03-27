import React from "react";
//import { Link } from "react-router-dom";
interface PaginateProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  pageSelected: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pag pagination pagination-middle justify-content-center">
        {pageNumbers.map((number) => {
          let classes = "page-item  ";
          if (number === props.currentPage) {
            classes += "active";
          }
          //{`/pages-${number}`}
          return (
            <li className={classes}>
              <a
                onClick={(event) => { event.preventDefault(); props.pageSelected(number) }}
               // href=""
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;

