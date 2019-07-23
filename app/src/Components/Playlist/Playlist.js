import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends React.Component {
	constructor(props) {
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.value);
	}

	render() {
		return (
			<div onChange={this.handleNameChange} className="Playlist">
			  <input defaultValue={"New Playlist"}/>
			  {/*<!-- Add a TrackList component -->*/}
			  <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
			  <button className="Playlist-save">SAVE TO SPOTIFY</button>
			</div>
		);
	}
}

export default Playlist;