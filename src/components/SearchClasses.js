import React from 'react'
import UserHeader from './UserHeader'

const SearchClasses = () => {
    return (
        <div>
            <UserHeader />
            <h1>Awaken to a healthier, happier you.</h1>
            <h3>Discover a world of in-person and virtual fitness, wellness, and beauty services.</h3>
            <form>
                <label htmlFor="search">Search for classes</label>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchClasses
