import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

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
      id: 2}],
    playlistName: "Favorites",
    playlistTracks: [{
      name: 'Brown Eyed Girl',
      artist: 'Van Morrison',
      album: "Blowin' Your Mind!",
      id: 3},
      {
      name: "I Run To You",
      artist: "Lady Antebellum",
      album: "Lady Antebellum",
      id: 4}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {

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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;