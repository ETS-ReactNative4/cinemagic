import React from 'react';

const SearchV2 = (props) => {
  return (
    <>
      <label htmlFor='search'>Search by movie title</label>
      <input type='text' value={props.inputValue} onChange={props.movieFilterOnChange} />
    </>
  )
}