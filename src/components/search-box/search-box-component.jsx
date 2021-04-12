import React from 'react';
import './search-box.styles.css';

// de structure placeholder property from the object that comes to the component then passing in to place holder
export const SearchBox =({placeholder , handleChange}) =>(
    <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange} />
);