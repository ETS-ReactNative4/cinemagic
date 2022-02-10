import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    width: 288px;
    height: 42px;
    background-color: #303234;
    box-shadow: -4px -3px 10px rgba(0, 0, 0, 0.25), 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const SearchBarIcon = styled.img`
    display: flex;
    align-item: center;
    width: 20px;
    heigth: 20px;
    
`

const SearchBar = ({
    SearchBarSrc = '/search-dark.svg',
    onClickNavBar = () =>{}
}) => {
    return <Cont>
        <SearchBarIcon src={SearchBarSrc}/>
    </Cont>
}

export default SearchBar;