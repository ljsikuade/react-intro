import React from "react";

class MoreInfo extends React.Component {
  constructor() {
    super();
    this.state = { similarFilms: null };
  }
  componentWillMount() {
    const movieId = this.props.result.id;
    fetch(
      `http://api.themoviedb.org/3/movie/${movieId}/similar?api_key=c1eda2d27f7a73d8ca633b6936e5b012`
    )
      .then(response => response.json())
      .then(body => this.setState({ similarFilms: body.results }));
  }
  render() {
    if (!this.state.similarFilms) {
      return <p>Loading...</p>;
    }

    return (
      <span>
        <h1>{this.props.result.title}</h1>
        <h2>Overview</h2>
        <p>{this.props.result.overview}</p>
        <span>
          <h2>Similar Productions:</h2>
          <ul>
            <li>
              {this.state.similarFilms[0].title}
              {this.state.similarFilms[0].release_date}
            </li>
            <li>
              {this.state.similarFilms[1].title}
              {this.state.similarFilms[1].release_date}
            </li>
            <li>
              {this.state.similarFilms[2].title}
              {this.state.similarFilms[2].release_date}
            </li>
          </ul>
        </span>
      </span>
    );
  }
}
export default MoreInfo;
