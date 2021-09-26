import logo from "./logo.png"; 
import './App.css';
import Dictionary from "./Dictionary"; 

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       
      </header>
      <main>
        <Dictionary defaultKeyword="plant" />
        </main>
      <footer className="App-footer"> This project was coded by Freya Dawbarn and is {""}
        <a href="https://github.com/fdawbarn/dictionary-project" target="_blank"  rel="noreferrer">open-sourced on Github</a> </footer>
      <div className="pexels">
      <a href="https://www.pexels.com" target="_blank" rel="noreferrer">Photos provided by Pexels</a>
      </div>
      </div>
    </div>
  );
}

export default App;
