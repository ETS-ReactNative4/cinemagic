import React from 'react';
import scss from './description.module.scss';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

export default function Description({
  title,
  releaseDate,
  directorList,
  castList,
}){
  const { theme } = useTheme();

  return (
    <div className={scss.container}>
      {/* main desc */}
      <section className={scss.descCont}>
        {/* heading */}
        <div className={scss.headingCont}>
          <SectionTitle textColor={comp_themes[theme].popUpSettingText}>
            { title }
          </SectionTitle>
          <img
            src={comp_themes[theme].navbar_fav}
            className={scss.icon}
          />
        </div>
      </section>

       {/* release date */}
       <section className={scss.yearCont}>
        <SectionTitle textColor={comp_themes[theme].popUpSettingText}>
          Release Date
        </SectionTitle>
        <SectionInfo textColor={comp_themes[theme].popUpSettingText}>
          { releaseDate }
        </SectionInfo>
      </section>

      {/* director */}
      <section className={scss.directorCont}>
        <SectionTitle textColor={comp_themes[theme].popUpSettingText}>
          Director
        </SectionTitle>
        <SectionInfo textColor={comp_themes[theme].popUpSettingText}>
          { directorList }
        </SectionInfo>
      </section>

      {/* cast */}
      <section className={scss.castCont}>
        <SectionTitle textColor={comp_themes[theme].popUpSettingText}>
          Cast
        </SectionTitle>
        <SectionInfo textColor={comp_themes[theme].popUpSettingText}>
          { castList }
        </SectionInfo>
      </section>
    </div>
  )
}

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
  color: ${props => props.textColor}
`

const SectionInfo = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: lighter;
  color: ${props => props.textColor}
`
