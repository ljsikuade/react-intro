import React from "react";

class Remove extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event, id) {
    this.props.receiveRemoveFavourite(id);
  }
  render() {
    return (
      <li className="favourite__header" key={this.props.id}>
        <a href={`https://www.imdb.com/title/${this.props.imdb}/`}>
          {this.props.title}
        </a>
        <button onClick={() => this.handleClick(event, this.props.id)}>
          Remove
        </button>
      </li>
    );
  }
}
export default Remove;
