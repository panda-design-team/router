import {css} from '@emotion/css';
import leftNavBg from '../assets/leftNavBg.png';

export const festivalExpandedCss = css`
    --panda-left-navigation-color: white;
    --panda-left-navigation-active-color: white;
    --panda-left-navigation-border-color: #e0e0e0;
    --panda-left-navigation-active-bg: #00000033;
    --panda-left-navigation-hover-bg: #00000033;
    --panda-left-navigation-level-2-bg-collapsed: #00000033;
    background-image: url(${leftNavBg});
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
`;
