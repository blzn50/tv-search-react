import React from 'react';
import { Link } from 'react-router-dom';
import './SeriesList.css';

const SeriesList = props => (
  <div>
    <ul className="series-list">
      {props.series.map(series => (
        <li key={series.show.id}>
          <Link to={`/series/${series.show.id}`}> {series.show.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
export default SeriesList;
