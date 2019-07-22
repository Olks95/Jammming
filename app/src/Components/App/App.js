import React from 'react';
import './App.css';
import SearchResults from './../SearchResults/SearchResults.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     searchResults: [{
      name: 'How You Remind Me',
      artist: 'Nickelback',
      album: 'Silver Side Up',
      id: 1},
      {
      name: "Bonfire Heart",
      artist: "James Blunt",
      album: "Moon Landing (Deluxe Edition)",
      id: 2}]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <div className="App-playlist">
            {/*<!-- Add a SearchResults component -->
            <!-- Add a Playlist component -->*/}
            <SearchResults searchResults={this.state.searchResults}/>
          </div>
        </div>
      </div>
    );
  }
}


  export default App;
