import React from 'react';
import './Track.css';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = { buttonIcon: '+' };
	}

	renderAction() {
		if(this.props.isRemoval === false) {
			this.setState({ buttonIcon: '-' });
		}
	}

	render() {
		return (
			<div className="Track">
			  <div className="Track-information">
			    <h3>{this.props.track.name}</h3>
			    <p>{this.props.track.artist} | {this.props.track.album}</p>
			  </div>
			  <button className="Track-action">{/*<!-- + or - will go here -->*/}</button>
			</div>
		);
	}
}

export default Track;