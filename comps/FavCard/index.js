import React, {useRouter} from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const FavCard = ({
    title = "The Dark knight",
    img = "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
}) => { 
  const { theme } = useTheme();
  return <Cont>
      <CardCont>
        <MovieImage src={img}/>
        <MovieTitle>{title}</MovieTitle>
      </CardCont>
  </Cont>
}

export default FavCard;

const Cont = styled.div`
`

const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 123px;
    height: 195px;
`

const MovieImage = styled.img`
    width: 123px;
    height: 179px;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const MovieTitle = styled.text`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: #E0E0E0;
`
