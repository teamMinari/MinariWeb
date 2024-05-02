import React from "react";
import * as M from '../../styles/SearchBarStyle';

const SearchBar = () => {
    return (
        <div>
            <M.Bar>
                <M.SearchInput type="text" placeholder="Search..." />
                <M.SearchIcon />
            </M.Bar>
        </div>
    );
}

export default SearchBar;