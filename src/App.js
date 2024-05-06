import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/kas-neu"
              target="_blank"
              rel="noreferrer"
            >
              Kasia
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/kas-neu/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
