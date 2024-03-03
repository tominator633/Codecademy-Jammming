import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";


function SearchResults (props) {

  const addTrack = (track) => {
    props.setTracklist(
      (prev) => {
        if (!prev.includes(track)) {
          prev.push(track);
        }
      }
    )
  };


return (
    <div id={styles.resultsCON}>
    <h2>Results</h2>
    {props.results.map((song) => {
     return <Track  name={song.name}
                    artist={song.artist} 
                    album={song.album} 
                    key={song.id} 
                    id={song.id}
                    addTrack={addTrack}/>
    })}
  </div>
    )
}
export default SearchResults;