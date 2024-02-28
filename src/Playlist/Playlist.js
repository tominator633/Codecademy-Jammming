import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist () {
return (
    <div id={styles.playlistCON}>
    <input id={styles.playlistName} type="text" placeholder="name your playlist"/>
    <Tracklist/>
    <button id={styles.savePlaylist}>Save to Spotify</button>
  </div>
)
}

export default Playlist;