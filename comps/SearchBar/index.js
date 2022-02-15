import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    width:300px;
    height:42px;
    background-color: #303234;
    border: none;
    box-shadow: -4px -3px 10px rgba(0, 0, 0, 0.25), 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;
const SearchBarInput = styled.input`
    display: flex;
    justify-content: center;
    color: #ABABAB;
    height:30px;
    width:250px;
    margin-left:20px;
    background-color: #303234;
    border: none;
    font-size:15px;
`
const SearchBarIcon = styled.img`
    width: 20px;
    heigth: 20px;  
    margin-right:20px;
`;

const SearchBar = ({
    SearchBarSrc = '/search-dark.svg',
    onClickSearch = () => {},
}) => {
    return <Cont>
        <SearchBarInput placeholder="Search by title, casts, and director "></SearchBarInput>
        <SearchBarIcon src={SearchBarSrc} onClick={onClickSearch}/>
    </Cont>
}

export default SearchBar;