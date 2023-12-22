import { useState } from "react";
import Search from "../Search/Search";
import Filter from '../Filter/Filter';


const Forms = () => {
    const [search, setSearch] = useState('');
    return (
        <>
        <Search search={search} setSearch={setSearch}/>
        <Filter/>
        </>
 )   
}

export default Forms;