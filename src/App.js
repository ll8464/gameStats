// import "./App.css";
// import "./Achievements.js";
// import React from "react";
// const apiKey = "";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="Main">
        <div className="Card">
          {/* <Achieve /> */}
          {/* <SearchTextInput /> */}
          <input
            type="text"
            className="search-bar"
            id="getNewsForApp"
            placeholder="Search..."
          />
          <button onClick={bindGetNewsButton} type="submit">
            Submit
          </button>
        </div>
      </section>
      {/* <Foot name="Stuff" /> */}
    </div>
  );
}

function bindGetNewsButton() {
  document
    .getElementById("getNewsForApp")
    .addEventListener("click", function (event) {
      var homeURL = "http://localhost:3001/news/?";
      var userInput = 440;
      var newURL = homeURL + userInput;
      var req = new XMLHttpRequest();
      req.open("GET", newURL, true);
      req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
          var response = JSON.parse(req.responseText);
          console.log(JSON.parse(req.responseText));
        } else {
          console.log("Error in network request: ");
        }
      });
      req.send(null);
    });
}

// let achievements = {
//   fetchAchievements: function (game) {
//     fetch(
//       "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=" +
//         game +
//         "&format=json"
//     );
//   },
//   displayAchievements: function (data) {
//     const { allAchievements } = data;
//     const { achievementName } = data.name;
//     const { achievementPercentage } = data.percent;
//     document.querySelector(".AchievementsInsert").innerText =
//       achievementName + " " + achievementPercentage;
//   },
//   search: function () {
//     this.fetchAchievements(document.querySelector(".search-bar").value);
//   },
// };

// function Achieve(props) {
//   return (
//     <section className="Achievements">
//       <h1>Achievement Percentages</h1>
//       <p>Input the GameId to find Percentages</p>
//       <input
//         type="text"
//         className="search-bar"
//         id="searchBar"
//         placeholder="Search..."
//       />
//       <button className="search" id="search-button">
//         <img
//           id="searchIcon"
//           src="src/assets/images/search.png"
//           alt="search button"
//         />
//       </button>
//       <div className="AchievementsInsert"></div>
//     </section>
//   );
// }
// function Foot(props) {
//   return (
//     <footer>
//       <a href="https://www.flaticon.com/free-icons/search" title="search icons">
//         Search icons created by Royyan Wijaya - Flaticon
//       </a>
//     </footer>
//   );
// }

// class SearchTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   focusTextInput() {
//     this.textInput.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <section className="Achievements">
//           <h1>Achievement Percentages</h1>
//           <p>Input the GameId to find Percentages</p>
//           <input
//             type="text"
//             className="search-bar"
//             id="searchBar"
//             placeholder="Search..."
//             ref={this.textInput}
//           />
//           <button className="search" id="search-button" onClick={searchBar}>
//             <img
//               id="searchIcon"
//               src="src/assets/images/search.png"
//               alt="search button"
//             />
//           </button>
//           <div className="AchievementsInsert"></div>
//         </section>
//       </div>
//     );
//   }
// }

// let searchBar = () =>
//   document
//     .querySelector("#searchBar")
//     .addEventListener("keyup", function (event) {
//       console.log("it works");
//       if (event.key == "Enter") {
//         achievements.search();
//       }
//     });

// // achievements.fetchAchievements(440);

//Example Code

export default App;
