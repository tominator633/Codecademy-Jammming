import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import styles from "./App.module.css";


const songs = [
  {name: "Yeah!", artist: "Chris Brown", album: "nanana", id: "1"},
  {name: "Bussin", artist: "Nicki Minaj", album: "Untitled", id: "2"},
  {name: "FE!N", artist: "Travis Scott", album: "UTOPIA", id: "3"},
  {name: "Atomy", artist: "Jelen", album: "Vsechno bude dobry", id: "4"},
  {name: "Freestyle", artist: "Lil Baby", album: "Too Hard", id: "5"},
];
const tracksInPlaylist = [
  {name: "Yeah!", artist: "Chris Brown", album: "nanana", id: "1"},
  {name: "Bussin", artist: "Nicki Minaj", album: "Untitled", id: "2"},
  {name: "FE!N", artist: "Travis Scott", album: "UTOPIA", id: "3"},
  {name: "Atomy", artist: "Jelen", album: "Vsechno bude dobry", id: "4"},
  {name: "Freestyle", artist: "Lil Baby", album: "Too Hard", id: "5"},
];


function App() {
  const [results, setResults] = useState(songs);
  const [playlistName, setPlaylistName] = useState("");
  const [tracklist, setTracklist] = useState([]);

//THIS FUNCTION TOOOK ME ONE DAY TO FIGURE OUT---FIRST I USED PREV IN THE CONDITION - BUT PREV IS NOT DEFINED UNTIL IT IS DECLARED AS PARAMETER IN SETTER
//EVERYTIME THE SET TRACKLIST IS CALLED, A NEW ARRAY REPLACES THE OLD ONE. THATS WHY PUSH() DOES NOT WORK EITHER!!!
function addTrack (track) {
if (!tracklist.includes(track)) {
  setTracklist((prev) => [...prev, track])
}
}




  return (
    <>
    <SearchBar/>

    <section id={styles.resultsPlaylistCON}>

      <SearchResults results={results} 
                     addTrack={addTrack}
                      />

      <Playlist playlistName={playlistName} 
                setPlaylistName={setPlaylistName}
                tracklist={tracklist}
               
                />
    </section>
</>
  );
}

export default App;
