import React from "react";
import FavouritesDisplay from "./FavouritesDisplay";

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      //prettier-ignore
      <span>
            <button className="show__favourites" onClick={this.handleClick}>Favourites</button>
            {this.state.active && ( 
            <FavouritesDisplay  
            receiveRemoveFavourite={this.props.receiveRemoveFavourite} 
            favourites={this.props.favourites} /> )}
      </span>
    );
  }
}
export default Favourites;
