import "./App.css";
import "./Achievements.js";
import React from "react";
const apiKey = "";
let achievements = {
  fetchAchievements: function (game) {
    fetch(
      "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=" +
        game +
        "&format=json"
    );
  },
  displayAchievements: function (data) {
    const { allAchievements } = data;
    const { achievementName } = data.name;
    const { achievementPercentage } = data.percent;
    document.querySelector(".AchievementsInsert").innerText =
      achievementName + " " + achievementPercentage;
  },
  search: function () {
    this.fetchAchievements(document.querySelector(".search-bar").value);
  },
};

function Achieve(props) {
  return (
    <section className="Achievements">
      <h1>Achievement Percentages</h1>
      <p>Input the GameId to find Percentages</p>
      <input
        type="text"
        className="search-bar"
        id="searchBar"
        placeholder="Search..."
      />
      <button className="search" id="search-button">
        <img
          id="searchIcon"
          src="src/assets/images/search.png"
          alt="search button"
        />
      </button>
      <div className="AchievementsInsert"></div>
    </section>
  );
}
function Foot(props) {
  return (
    <footer>
      <a href="https://www.flaticon.com/free-icons/search" title="search icons">
        Search icons created by Royyan Wijaya - Flaticon
      </a>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="Main">
        <div className="Card">
          {/* <Achieve /> */}
          <SearchTextInput />
        </div>
      </section>
      <Foot name="Stuff" />
    </div>
  );
}

class SearchTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <section className="Achievements">
          <h1>Achievement Percentages</h1>
          <p>Input the GameId to find Percentages</p>
          <input
            type="text"
            className="search-bar"
            id="searchBar"
            placeholder="Search..."
            ref={this.textInput}
          />
          <button className="search" id="search-button" onClick={searchBar}>
            <img
              id="searchIcon"
              src="src/assets/images/search.png"
              alt="search button"
            />
          </button>
          <div className="AchievementsInsert"></div>
        </section>
      </div>
    );
  }
}

let searchBar = () =>
  document
    .querySelector("#searchBar")
    .addEventListener("keyup", function (event) {
      console.log("it works");
      if (event.key == "Enter") {
        achievements.search();
      }
    });

// achievements.fetchAchievements(440);

export default App;
