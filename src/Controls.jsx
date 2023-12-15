import React, { useContext } from "react";
import {MixtapeContext} from "./MixtapeContext";


export const Controls = () => {
  const {setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext);
  return (
    <div className="controls">
      <select onChange={e => {setGenre(e.target.value)}}>
        <option value="all">All</option>
        <option value="pop">Pop</option>
        <option value="rap">Rap</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rock">Rock</option>
      </select>
      <button onClick={() => {setSortOrder(!sortOrder)}}>
        {sortOrder === true ? 'Descending' : 'Ascending'}
      </button> 
      {/* TODO: add some controls!
      TODO: Genre control? Sort order control? */}
    </div>
  );
};
