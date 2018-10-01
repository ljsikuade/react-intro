import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //prettier-ignore
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1eda2d27f7a73d8ca633b6936e5b012&query=${this.state.text}`;
    this.props.receiveSearch(url);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Search</button>
      </form>
    );
  }
}
export default Search;
