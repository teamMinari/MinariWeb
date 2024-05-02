import React from "react";
import * as M from '../../styles/SearchBarStyle';

const SearchBar = () => {
    return (
        <div>
            <M.Bar>
                <M.SearchInput type="text" placeholder="용어를 검색해주세요." />
                <M.SearchIcon />
            </M.Bar>
        </div>
    );
}

export default SearchBar;