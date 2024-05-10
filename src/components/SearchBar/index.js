import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div class="InputContainer">
    <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search celebrities..."
        value={searchTerm}
        onChange={handleChange}
        className='input' 
      />
    </div>
  )
}

export default SearchBar