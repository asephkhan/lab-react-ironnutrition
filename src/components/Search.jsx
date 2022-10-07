import { Divider, Input } from 'antd'
import {useState} from 'react'

function Search(props) {
    const [search, setSearch] = useState('');

   const handleChange = (e) =>{
    setSearch(e.target.value);
    props.search(e.target.value);

   }
  return (
   <>
   <Divider>Search</Divider>

    <label>Search</label>
    <Input  type="text" value={search} onChange={handleChange} />
   </>
  )
}

export default Search