import React, {useRouter} from 'react';
import styled from 'styled-components';
import scss from './backBtn.module.scss';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

export default function backBtn({
  onBackBtnClick = () => {}
}){
  const { theme } = useTheme();

  return (
    <div className={scss.container} onClick={onBackBtnClick}>
      <img src={comp_themes[theme].backBtn} />
    </div>
  )
}