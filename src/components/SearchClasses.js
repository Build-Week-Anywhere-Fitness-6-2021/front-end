import axios from "axios";
import React, { useEffect, useState } from "react";
import UserHeader from "./UserComponents/UserHeader";
import classList from "../data/data";
import "../css/SearchClasses.css";
import ClassCard from "./UserComponents/ClassCard";



const SearchClasses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState(false);
  // const [classes, setClasses] = useState(classList);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
    //   .then((res) => {
    //     console.log(res.data.results, 'test');
    //     setClasses(res.data.results)
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err');
    //   });
  };


  const onChange = evt => {
    const { value } = evt.target
    setSearchValue(value)
    setSearch(false);
  }

  const searchResults = () => {
    <div className="classCards">
    {classList.filter((val) => {
      if (searchValue === "") {
        return null
      } else if (val.name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
        return val
      }
    }).map((item, key) => {
      return <ClassCard key={key} class={item} />
    })}    
    </div>
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
      {search ?     
        <div className="classCards">
          {classList.filter((val) => {
            if (searchValue === "") {
              return null
            } else if (val.name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
              return val
            }
          }).map((item, key) => {
            return <ClassCard key={key} class={item} />
          })}    
        </div> 
      : null}
      {/* <div className="classCards">
        {classList.filter((val) => {
          if (searchValue === "") {
            return null
          } else if (val.name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
            return val
          }
        }).map((item, key) => {
          return <ClassCard key={key} class={item} />
        })}    
      </div> */}

    </div>
  );
};

export default SearchClasses;
