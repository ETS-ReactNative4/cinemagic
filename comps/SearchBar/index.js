import React, {useRouter} from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    width:300px;
    height:42px;
    background-color: ${props=>props.bgColor};
    border: none;
    box-shadow: -4px -3px 10px rgba(0, 0, 0, 0.25), 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;
const SearchBarInput = styled.input`
    display: flex;
    justify-content: center;
    color: #ABABAB;
    height:30px;
    width:230px;
    margin-left:20px;
    background-color: ${props=>props.bgColor};
    border: none;
    font-size:14px;
    outline: none;
`
const SearchBarIcon = styled.img`
    width: 20px;
    height: 20px;  
    margin-right:20px;
`;

const SearchBar = ({
    onClickSearch = () => {},
}) => {
    const {theme} = useTheme();
    return <Cont bgColor={comp_themes[theme].search_bar}>
        <SearchBarInput bgColor={comp_themes[theme].search_bar} placeholder="Search by title, casts, and director "></SearchBarInput>
        <SearchBarIcon src={comp_themes[theme].search_bar_img} onClick={onClickSearch}/>
    </Cont>
}

export default SearchBar;