import axios from 'axios'
import React, { useEffect } from 'react'
import UserHeader from './UserHeader'
import "../css/SearchClasses.css";

const SearchClasses = () => {

    const handleSubmit = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='search-header-container'>
            <UserHeader />

            <div className='search-container'>
                <h1>Awaken to a healthier, happier you.</h1>
                <h3>Discover a world of in-person and virtual fitness, wellness, and beauty services.</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="search"></label>
                        <input 
                        className='searchBox'
                        placeholder='Search for classes'
                        type="text"/>
                        <button className="searchBtn" type="submit">Search</button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default SearchClasses
