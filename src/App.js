import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';
import Playlist from './Playlist/Playlist';
import styles from "./App.module.css";


const songs = [
  {name: "Yeah!", artist: "Chris Brown", album: "nanana", id: "1"},
  {name: "Bussin", artist: "Nicki Minaj", album: "Untitled", id: "2"},
  {name: "FE!N", artist: "Travis Scott", album: "UTOPIA", id: "3"},
  {name: "Atomy", artist: "Jelen", album: "Vsechno bude dobry", id: "4"},
  {name: "Freestyle", artist: "Lil Baby", album: "Too Hard", id: "5"},
];



function App() {
  const [results, setResults] = useState(songs);

  return (
    <>
    <SearchBar/>
    <section id={styles.resultsPlaylistCON}>
      <SearchResults results={results} />
      <Playlist/>
    </section>
</>
  );
}

export default App;
