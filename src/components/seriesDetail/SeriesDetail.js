import React, { Component } from 'react';

class SeriesDetail extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ show: json });
      });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show === null && <p>No show to show.</p>}
        {show !== null && (
          <div>
            <p>Series Detail - show id: {this.props.match.params.id}</p>
            {show.name ? <p>{show.name}</p> : null}
            {show.premiered ? <p>Premiered: {show.premiered}</p> : null}
            {show.rating ? <p>Rating: {show.rating.average}</p> : null}
            {show._embedded ? <p>Episodes: {show._embedded.episodes.length}</p> : null}
            {show.image ? <img src={show.image.medium} alt="show poster" /> : null}
          </div>
        )}
      </div>
    );
  }
}

export default SeriesDetail;
