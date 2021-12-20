import React from 'react'
import UserHeader from './UserHeader'
import "../css/SearchClasses.css";

const SearchClasses = () => {
    return (
        <div className='search-header-container'>
            <UserHeader />
            <div className='search-container'>
                <h1>Awaken to a healthier, happier you.</h1>
                <h3>Discover a world of in-person and virtual fitness, wellness, and beauty services.</h3>
                <form>
                    <label htmlFor="search"></label>
                    <div className='searchBox'>
                        <input 
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
