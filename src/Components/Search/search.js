import React, {useState} from 'react';

function Search(props) {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        props.search(e.target.value);
    };
  return (
    <form>
        <h4>Search for Dishes:</h4>
        <input type='text' value={search} onChange={handleChange} />
    </form>
  )
}

export default Search;