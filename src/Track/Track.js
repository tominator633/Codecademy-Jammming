import React from "react";
import styles from "./Track.module.css";

function Track (props) {

return (
      <div id={styles.track}>
        <figure id={styles.cover}></figure>
        <div id={styles.trackInfo}>
          <h3 id={styles.trackName}>{props.name}</h3>
          <h4 id={styles.artistAlbum}>{props.artist} | {props.album}</h4>
        </div>
        <button id={styles.plusBtn}>+</button>
      </div>
    )
}

export default Track;