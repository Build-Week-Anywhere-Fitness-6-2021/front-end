import axios from "axios";
import React, { useEffect, useState } from "react";
import UserHeader from "./UserComponents/UserHeader";
import classes from "../data/data";
import "../css/SearchClasses.css";
import ClassCard from "./UserComponents/ClassCard";

const SearchClasses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [classes, setClasses] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((res) => {
        console.log(res.data.results, 'test');
        setClasses(res.data.results)
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };


  const onChange = evt => {
    const { value } = evt.target
    setSearchValue(value)
  }

  return (
    <div className="search-page-container">
      <div className="search-header-container">
        <UserHeader />

        <div className="search-container">
          <h1>Awaken to a healthier, happier you.</h1>
          <h3>
            Discover a world of in-person and virtual fitness, wellness, and
            beauty services.
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="search"></label>
              <input
                value={searchValue}
                name='classSearch'
                className="searchBox"
                placeholder="Search for classes"
                type="text"
                onChange={onChange}
              />
              <button className="searchBtn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="classCards">
            <ClassCard searchResult={searchValue} />
      </div> */}
      {classes.map(pokemon => (
              <div key={pokemon.name} className="classCards">{pokemon.name}</div>
            ))}
    </div>
  );
};

export default SearchClasses;
