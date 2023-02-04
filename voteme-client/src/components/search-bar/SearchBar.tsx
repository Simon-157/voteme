import React from 'react'
import searchStyles from "./search.module.scss"

const SearchBar:React.FC = () => {
  return (
    <input className={searchStyles.search} type="text" name="search" placeholder="Search .. .." />
  )
}

export default SearchBar