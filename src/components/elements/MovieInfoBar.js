import React from 'react';
import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../helpers.js';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <span className="movieinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>
      <div className="movieinfobar-content-col">
        <span className="movieinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>
      <div className="movieinfobar-content-col">
        <span className="movieinfobar-info">
          Revenue: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
