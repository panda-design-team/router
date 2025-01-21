import {css} from '@emotion/css';
import {useMemo} from 'react';
import styled from '@emotion/styled';
import upExpanded from '../assets/up-expanded.png';
import downExpanded from '../assets/down-expanded.png';
import upCollapsed from '../assets/up-collapsed.png';
import downCollapsed from '../assets/down-collapsed.png';
import {useOptionsContext} from './Context';

export const festivalExpandedCss = css`
    --panda-left-navigation-color: white;
    --panda-left-navigation-active-color: white;
    --panda-left-navigation-border-color: #e0e0e0;
    --panda-left-navigation-active-bg: #00000033;
    --panda-left-navigation-hover-bg: #00000019;
    --panda-left-navigation-level-2-bg-collapsed: #00000033;
    --panda-left-navigation-bg: linear-gradient(180deg, #E0383E 0%, #DD403A 29.34%, #E89953 100%);
`;

// 右上对齐
const Up = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-size: cover;
    z-index: -1;
`;

// 左下对齐
const Down = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: cover;
    z-index: -1;
`;

const upExpandedCss = css`
    width: 200px;
    height: 448px;
    background: url(${upExpanded}) no-repeat;
`;

const downExpandedCss = css`
    width: 200px;
    height: 400px;
    background: url(${downExpanded}) no-repeat;
`;

const upCollapsedCss = css`
    width: 60px;
    height: 448px;
    background: url(${upCollapsed}) no-repeat;
`;

const downCollapsedCss = css`
    width: 60px;
    height: 400px;
    background: url(${downCollapsed}) no-repeat;
`;

export const FestivalBg = () => {
    const {collapsed} = useOptionsContext();
    const {upCss, downCss} = useMemo(
        () => {
            return {
                upCss: collapsed ? upCollapsedCss : upExpandedCss,
                downCss: collapsed ? downCollapsedCss : downExpandedCss,
            };
        },
        [collapsed]
    );
    return (
        <>
            <Up className={upCss} />
            <Down className={downCss} />
        </>
    );
};
