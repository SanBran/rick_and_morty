import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";
import logo from "./components/Resources/logo.png";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div className="Logo"></div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
