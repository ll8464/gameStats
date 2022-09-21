import "./App.css";
import "./Achievements.js";

let achievements = {
  fetchAchievements: function (game) {
    fetch(
      "http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=" +
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

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      achievements.search();
    }
  });

achievements.fetchAchievements(440);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav></nav>
      </header>
      <section className="Main">
        <div className="Card">
          <section className="Achievements">
            <h1>Achievement Percentages</h1>
            <p>Input the GameId to find Percentages</p>
            <input
              type="text"
              className="search-bar"
              class="search-bar"
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
          <section className="stats">Stat</section>
          <section className="users">User</section>
        </div>
      </section>
      <footer>
        Foot
        <a
          href="https://www.flaticon.com/free-icons/search"
          title="search icons"
        >
          Search icons created by Royyan Wijaya - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
