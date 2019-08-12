import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends React.Component {
	constructor(props) {
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}

	render() {
		return (
			<div className="Playlist">
			  <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} />
			  {/*<!-- Add a TrackList component -->*/}
			  <TrackList 
			  	tracks={this.props.playlistTracks} 
			  	onRemove={this.props.onRemove} 
			  	isRemoval={true} />
			  <button 
			  	onClick={this.props.onSave} 
			  	className="Playlist-save">SAVE TO SPOTIFY</button>
			</div>
		);
	}
}

export default Playlist;