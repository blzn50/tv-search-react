import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/SeriesList';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesName: '',
      isFetching: false
    };
  }

  onSeriesInputChange = e => {
    const inp = e.target.value;
    this.setState({
      seriesName: inp,
      isFetching: true
    });
    fetch(`http://api.tvmaze.com/search/shows?q=${inp}`)
      .then(res => res.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <div>
          <input
            style={{ padding: 10, width: 200 }}
            onChange={this.onSeriesInputChange}
            value={seriesName}
            type="text"
            placeholder="Search series"
          />
        </div>
        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() === '' && (
            <p>Please type something to search the databse.</p>
          )}
        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() !== '' && <p>No series found with that name.</p>}
        {isFetching && <p>Loading...</p>}
        {!isFetching && <SeriesList series={series} />}
      </div>
    );
  }
}

export default Series;
