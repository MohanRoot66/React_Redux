import "./index.css";
import MoviePlaylist from "./Components/MoviePlaylist";
import {useDispatch} from "react-redux";
import SongPlaylist from "./Components/SongPlaylist";
import { ResetMovie } from "./MovieReducer";
import { ResetSong } from "./SongReducer";

export default function App() {
  
  const dispatch = useDispatch()
  const handleResetClick = () => {
    
    dispatch(ResetSong())
    dispatch(ResetMovie())
  };
  
  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
