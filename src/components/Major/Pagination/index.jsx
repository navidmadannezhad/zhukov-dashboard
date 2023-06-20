import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from "@utils/usePagination";
import styles from "./Pagination.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(styles.paginationContainer, { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames(styles.paginationItem, {
          [`${styles.disabled}`]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className={styles.paginationItem} key={pageNumber}>&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={classnames(styles.paginationItem, {
              [`${styles.selected}`]: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames(styles.paginationItem, {
          [`${styles.disabled}`]: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </li>
    </ul>
  );
};

export default Pagination;