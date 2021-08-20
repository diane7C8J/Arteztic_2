import React from 'react';
import '../assets/styles/design-tokens.css';
import './pagination.css';

export const Pagination = ({...props}) => {
  return (
    <div className="pagination">
      <a href="#prev" className="pagination-prev">
        &lt;
      </a>
      <a href="#page" className="pagination-page">
        1
      </a>
      <a href="#page" className="pagination-page pagination-page--active">
        2
      </a>
      <a href="#page" className="pagination-page">
        3
      </a>
      <a href="#page" className="pagination-page">
        4
      </a>
      <a href="#page" className="pagination-page">
        5
      </a>
      <a href="#page" className="pagination-page">
        &hellip;
      </a>
      <a href="#page" className="pagination-page">
        22
      </a>
      <a href="#next" className="pagination-next">
        &gt;
      </a>
    </div>
  );
};
