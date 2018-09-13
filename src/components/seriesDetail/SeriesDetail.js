import React, { Component } from 'react';

class SeriesDetail extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
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
            <p>{show.name}</p>
            <p>Premiered: {show.premiered}</p>
            <p>Rating: {show.rating.average}</p>
            <p>Episodes: {show._embedded.episodes.length}</p>
            <p>
              <img src={show.image.medium} alt="show poster" />
            </p>
            <p />
          </div>
        )}
      </div>
    );
  }
}

export default SeriesDetail;
