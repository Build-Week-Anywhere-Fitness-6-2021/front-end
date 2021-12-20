import axios from 'axios'
import React, { useEffect } from 'react'
import UserHeader from './UserHeader'

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
        <div>
            <UserHeader />
            <h1>Awaken to a healthier, happier you.</h1>
            <h3>Discover a world of in-person and virtual fitness, wellness, and beauty services.</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for classes</label>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchClasses
