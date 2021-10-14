import React, { Component } from 'react'

import './Playlist.css'

/*Import Components*/
import Tracklist from '../Tracklist/Tracklist';

export default class Playlists extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
          </div>
        )
    }
}
