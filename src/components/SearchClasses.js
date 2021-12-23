import axios from "axios";
import React, { useEffect, useState } from "react";
import UserHeader from "./UserComponents/UserHeader";
import classList from "../data/data";
import "../css/SearchClasses.css";
import ClassCard from "./UserComponents/ClassCard";



const SearchClasses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  
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

  const changeFilter = () =>{
    setFilter(!filter);
  }
  const onFilterSelect = evt => {
    const { name, value } = evt.target;
    setFilterType(name);
    setFilterValue(value);
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
              <button className="searchBtn" onClick={changeFilter}>Filter By...</button>
            </div>
            
          </form>
            
              <div className="filter-container">
                {
                  filter &&
                  <div className="filters">
                    <form>
                      <label className="filter-label">
                        <select onChange={onFilterSelect} value={classList.type} name='type'>
                          <option value=''> By Type </option>
                          <option value='cycle'>Cycle</option>
                          <option value='insanity'>Insanity</option>
                          <option value='pilates'>Pilates</option>
                        </select>
                      </label>
                      <label className="filter-label">
                        <select onChange={onFilterSelect} value={classList.duration} name='duration'>
                          <option value=''> By Duration </option>
                          <option value={30}>30 Minutes</option>
                          <option value={60}>60 Minutes</option>
                        </select>
                      </label>
                      <label className="filter-label">
                        <select onChange={onFilterSelect} value={classList.intensity} name='intensity'>
                          <option value=''> By Intensity </option>
                          <option value='low'>Low Intensity</option>
                          <option value='medium'>Medium Intensity</option>
                          <option value='high'>High Intensity</option>
                        </select>
                      </label>
                      <label className="filter-label">
                        <select onChange={onFilterSelect} value={classList.start} name='start'>
                          <option value=''> By Time </option>
                          <option value='7:00 a.m.'>7:00 a.m.</option>
                          <option value='8:00 a.m.'>8:00 a.m.</option>
                          <option value='9:00 a.m.'>9:00 a.m.</option>
                          <option value='10:00 a.m.'>10:00 a.m.</option>
                          <option value='11:00 a.m.'>11:00 a.m.</option>
                          <option value='12:00 p.m.'>12:00 p.m.</option>
                          <option value='1:00 p.m.'>1:00 p.m.</option>
                          <option value='2:00 p.m.'>2:00 p.m.</option>
                          <option value='3:00 p.m.'>3:00 p.m.</option>
                        </select>
                      </label>
                      <label className="filter-label">
                        <select onChange={onFilterSelect} value={classList.location} name='location'>
                          <option value=''> By Location </option>
                          <option value='north'>North</option>
                          <option value='east'>East</option>
                          <option value='south'>South</option>
                          <option value='west'>West</option>
                        </select>
                      </label>
                    </form>
                  </div>
                }
              </div>
        </div>
      </div>

      {
        
        filterType?
          <div>
            {
              classList.filter(classes => classes[filterType].toString() === filterValue).map((item, key) => {
                return <ClassCard key={key} class={item} />
              })
            }
          </div>
          : null

      }

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
    </div>
  );
};

export default SearchClasses;
