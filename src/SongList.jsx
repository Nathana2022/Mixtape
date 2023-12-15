import React, {useContext} from "react";
import {Song} from "./Song";
import {MixtapeContext} from "./MixtapeContext";



export const SongList = ({songs}) => {
  const {genre, sortOrder} = useContext(MixtapeContext)
  return (
    <div>
       {songs.filter(song => genre === 'all' || song.genre === genre).sort((a, b) => {
        if (sortOrder === true) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }).map(song => (
        <Song key={song.name} {...song} />
      ))
      }
      {/* <h2>TODO: Update taste in music...?</h2> */}
    </div>
  );
};
