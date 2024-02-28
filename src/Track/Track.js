import React from "react";
import styles from "./Track.module.css";

function Track () {

return (
      <div id={styles.track}>
        <figure id={styles.cover}></figure>
        <div id={styles.trackInfo}>
          <h3 id={styles.trackName}>Dont Phunk with my heart</h3>
          <h4 id={styles.artistAlbum}>Black Eyed Peas | The Elephant</h4>
        </div>
        <button id={styles.plusBtn}>+</button>
      </div>
    )
}

export default Track;