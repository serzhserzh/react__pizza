import React from "react";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  pageCurrent: number;
  setPageCurrent: (index: number) => void;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({
  pageCurrent,
  setPageCurrent,
  totalPages,
}) => {
  return (
    <div className={styles.root}>
      <ul>
        {pageCurrent > 0 ? (
          <svg
            onClick={() => {
              setPageCurrent(pageCurrent - 1);
            }}
            style={{ transform: "rotate(180deg)" }}
            width="40px"
            height="40px"
            viewBox="0,0,256,256"
          >
            <g
              fill="#fe5f1e"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(0.5,0.5)">
                <path d="M160,128.4l32.3,-32.4l159.7,160v0v0l-159.7,160l-32.3,-32.4l127.3,-127.6z"></path>
              </g>
            </g>
          </svg>
        ) : (
          <div
            style={{ width: "40px", height: "40px", userSelect: "none" }}
          ></div>
        )}
        {[...new Array(totalPages)].map((_, index) => (
          <li
            key={index}
            onClick={() => {
              setPageCurrent(index);
            }}
            className={pageCurrent === index ? styles.active : ""}
          >
            {index + 1}
          </li>
        ))}

        {pageCurrent < totalPages - 1 ? (
          <svg
            onClick={() => {
              setPageCurrent(pageCurrent + 1);
            }}
            width="40px"
            height="40px"
            viewBox="0,0,256,256"
          >
            <g
              fill="#fe5f1e"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(0.5,0.5)">
                <path d="M160,128.4l32.3,-32.4l159.7,160v0v0l-159.7,160l-32.3,-32.4l127.3,-127.6z"></path>
              </g>
            </g>
          </svg>
        ) : (
          <div
            style={{ width: "40px", height: "40px", userSelect: "none" }}
          ></div>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
