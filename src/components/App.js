import React from "react";
import Search from "./Search";
import Favourites from "./Favourites";
//import NextPage from "./NextPage";
import Results from "./Results";

class App extends React.Component {
  constructor() {
    super();
    this.state = { results: [], favourites: [] };
    this.receiveSearch = this.receiveSearch.bind(this);
    this.receiveFavourite = this.receiveFavourite.bind(this);
    this.receiveRemoveFavourite = this.receiveRemoveFavourite.bind(this);
    this.setItemImmediately = this.setItemImmediately.bind(this);
  }
  //To prevent losing storage data on a fresh session, we need to pull in local storage each time component mounts.
  componentDidMount() {
    let totalArr = JSON.parse(localStorage.getItem("favourites"));
    this.setState({ favourites: totalArr });
  }
  receiveSearch(search) {
    //Some logic here. Probably run a fetch?
    fetch(search)
      .then(response => response.json())
      .then(body => {
        this.setState({ results: body.results });
      });
  }

  setItemImmediately() {
    localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
  }

  receiveFavourite(film) {
    //Update state array. Update local storage.
    if (!this.state.favourites.includes(film.id)) {
      let sessionArray = this.state.favourites.concat(film.id);
      this.setState({ favourites: sessionArray }, () =>
        this.setItemImmediately()
      );
    }
  }

  receiveRemoveFavourite(favouriteID) {
    //Delete all with the id passed in, create new array from remainder.
    let favouriteArray = this.state.favourites.filter(
      fav => fav !== favouriteID
    );
    this.setState(
      {
        favourites: favouriteArray
      },
      () => this.setItemImmediately()
    );
  }
  render() {
    return (
      <div>
        <header>
          <h1 className="main-heading">React Movies</h1>
          <Favourites
            receiveRemoveFavourite={this.receiveRemoveFavourite}
            favourites={this.state.favourites}
          />
          <Search receiveSearch={this.receiveSearch} />
        </header>
        <Results
          receiveFavourite={this.receiveFavourite}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default App;
