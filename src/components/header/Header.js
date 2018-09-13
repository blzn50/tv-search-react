import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/series/Series';
import SeriesDetail from '../../components/seriesDetail/SeriesDetail';

const Header = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SeriesDetail} />
  </Switch>
);

export default Header;
