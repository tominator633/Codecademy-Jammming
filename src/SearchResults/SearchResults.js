import React from "react";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";


function SearchResults (props) {
console.log(props.results);
return (
    <div id={styles.resultsCON}>
    <h2>Results</h2>
     {props.results.map((song) => {
     return  <Track  name={song.name}
                    artist={song.artist} 
                    album={song.album} 
                    key={song.id}
                    id={song.id}
                    song={song}
                    addTrack={props.addTrack}
                    buttonSign="+"
                    />
    })}
  </div>
    )
}
export default SearchResults;