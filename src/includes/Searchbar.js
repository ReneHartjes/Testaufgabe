  
import React, { useState } from "react";

import './Data.json'



function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (

    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"

          placeholder="need to find something?.."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="thebtns">
          {filteredData.length === 0 ? (
              <>
            <button id="lupe"></button>
            <br></br></>
          ) : (
              <>
           
            <br></br></>
          )}
        </div>
      </div>

    </div>
<div className="opstuf">
{filteredData.length != 0 && (
    <div className="dataResult">
      {filteredData.slice(0, 3).map((value, key) => {
        return (
          <a className="dataItem" href={value.link} target="_blank">
            <h4>{value.title} </h4>
            <p>{value.author}</p>
          </a>
        );
      })}
    </div>
  )}</div></>
  );

  
}

export default SearchBar;
