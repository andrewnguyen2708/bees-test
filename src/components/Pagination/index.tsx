import * as React from "react";
import "./styles.scss";

export interface IPaginationProps {
  totalPages: number;
  onChangePage?: (page: number) => void;
}

export default function Pagination(props: IPaginationProps) {
  const [activePage, setActivePage] = React.useState(1);
  const { totalPages = 5, onChangePage } = props;
  const pages = Array.from({ length: totalPages }, (p, i) => i + 1);

  return (
    <div className="wrapper">
      <div className="pagination">
        <a
          onClick={() => {
            if (activePage === 1) return;
            setActivePage(activePage - 1);
            if (typeof onChangePage === "function") {
              onChangePage(activePage - 1);
            }
          }}
        >
          &laquo;
        </a>
        {pages.map((page) => (
          <a
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => {
              setActivePage(page);
              if (typeof onChangePage === "function") {
                onChangePage(activePage - 1);
              }
            }}
          >
            {page}
          </a>
        ))}
        <a
          onClick={() => {
            if (activePage === totalPages) return;
            setActivePage(activePage + 1);
            if (typeof onChangePage === "function") {
              onChangePage(activePage - 1);
            }
          }}
        >
          &raquo;
        </a>
      </div>
    </div>
  );
}
