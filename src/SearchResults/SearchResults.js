import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResults.module.css";

function SearchResults () {

return (
    <div id={styles.resultsCON}>
    <h2>Results</h2>
<Tracklist></Tracklist>
  </div>
    )
}

export default SearchResults;