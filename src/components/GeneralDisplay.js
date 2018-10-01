import React from "react";
import MoreInfo from "./MoreInfo";

class GeneralDisplay extends React.Component {
  constructor() {
    super();

    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
  }
  handleClick() {
    //some logic here
    this.setState({ active: !this.state.active });
  }
  handleFavourite() {
    this.props.receiveFavourite(this.props.result);
  }

  render() {
    return (
      <span>
        <img
          onClick={this.handleClick}
          src={"http://image.tmdb.org/t/p/w400" + this.props.result.poster_path}
        />
        <p>
          {this.props.result.title} {this.props.result.release_date}
        </p>
        {this.state.active && <MoreInfo result={this.props.result} />}
        <button className="favourite__add" onClick={this.handleFavourite}>
          Favourite
        </button>
      </span>
    );
  }
}
export default GeneralDisplay;
