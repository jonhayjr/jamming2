import React, { Component } from 'react';

import './App.css'

/*Import Components*/
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class componentName extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    state = {
        searchResults: [{
            name:'Bye Bye Bye',
            artist: 'NSYNC',
            album: 'No Strings Attached',
            id: 1
        }],
        playlistName: 'My Top 20',
        playlistTracks: [{
            name:'Bye Bye Bye',
            artist: 'NSYNC',
            album: 'No Strings Attached',
            id: 1
        }]
    }

    addTrack(track) {
        const playlistTrackId = this.state.playlistTracks.find(t => t.id === track.id);

        if (!playlistTrackId) {
            const newPlaylist = this.state.playlistTracks;
            newPlaylist.push(track);
            this.setState({playlistTracks: newPlaylist});
        }

    }

    removeTrack(track) {
        const playlistTracks = this.state.playlistTracks
        const newPlaylist = playlistTracks.filter(t => t.id !== track.id);
        this.setState({playlistTracks: newPlaylist});
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    }

    render () {
        return (
            <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar/>
                <div className="App-playlist">
                    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
                    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
                </div>
            </div>
            </div>
        )
    }
}

export default componentName