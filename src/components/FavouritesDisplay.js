import React from "react";
import Remove from "./Remove";

class FavouritesDisplay extends React.Component {
  constructor() {
    super();
    this.state = { favourites: [] };
  }
  //Adds any preexisting favourites.
  componentDidMount() {
    let totalFav = this.props.favourites;
    //Continuously fetching is, perhaps, a terrible idea
    totalFav.map(fav => {
      fetch(
        //Not a huge request, api page holds only a single object each time.
        `http://api.themoviedb.org/3/movie/${fav}?api_key=c1eda2d27f7a73d8ca633b6936e5b012`
      )
        .then(response => response.json())
        .then(body => {
          this.setState(prevState => ({
            favourites: prevState.favourites.concat(body)
          }));
        });
    });
  }
  //Re render the UL when an item is removed.

  render() {
    console.log(this.props.favourites);
    //If all the favourites haven't been added in.
    if (this.state.favourites.length === 0) {
      return <p>There doesn't seem to be anything here...</p>;
    }
    return (
      <ul className="favourites__container">
        {this.state.favourites.map(fav => (
          <Remove
            key={fav.id}
            imdb={fav.imdb_id}
            removeFavourite={this.removeFavourite}
            receiveRemoveFavourite={this.props.receiveRemoveFavourite}
            id={fav.id}
            title={fav.title}
          />
        ))}
      </ul>
    );
  }
}
export default FavouritesDisplay;
