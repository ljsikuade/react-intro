import React from "react";
import GeneralDisplay from "./GeneralDisplay";

class Results extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  render() {
    return (
      <main>
        <ul className="results">
          {this.props.results.map(result => {
            return (
              //wrap in parent component
              <li key={result.id}>
                <GeneralDisplay
                  receiveFavourite={this.props.receiveFavourite}
                  result={result}
                />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
export default Results;
