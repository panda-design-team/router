import styled from '@emotion/styled';
import {useLocation} from 'react-router-dom';
import {useLayoutEffect, useMemo, useRef} from 'react';
import {Tooltip} from 'antd';
import {css} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';
import {useOptionsContext} from './Context';
import {MenuItemContainer} from './MenuItemContainer';

const IconContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${variables.iconSize};
    height: ${variables.iconSize};
    transition: top 0.3s, left 0.3s;

    svg {
        font-size: ${variables.iconSize};
        width: ${variables.iconSize};
        height: ${variables.iconSize};
        top: 0;
    }
`;

const collapsedIconCss = css`
    top: 7px; // 随 iconSize 需调整
    left: 18px;
`;

const TitleContainer = styled.div`
    position: absolute;
    transition: top 0.3s, left 0.3s;
`;

const collapsedTitleCss = css`
    top: 26px;
    font-size: 12px;
`;

const expandedTitleCss = css`
    top: 9px;
    font-size: 14px;
    line-height: ${22 / 14};
`;

interface Props {
    level: 1 | 2;
    item: LeftNavigationMenuItem;
}

// eslint-disable-next-line complexity
export const MenuItem = ({level, item}: Props) => {
    const {collapsed} = useOptionsContext();
    const {enableSecondaryMenuIndent} = useOptionsContext();
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const {
        to,
        icon,
        title,
        shortTitle = title,
        tooltip,
    } = item;
    const isActive = item.isActive ?? location.pathname.startsWith(to as string);
    const indent = level === 2 ? (enableSecondaryMenuIndent ?? 20) : 0;

    const expandedIconCss = css`
        top: 12px; // (40 - 16) / 2
        left: ${16 + indent}px;
    `;

    useLayoutEffect(
        () => {
            if (titleContainerRef.current) {
                const {width} = titleContainerRef.current?.getBoundingClientRect() ?? {};
                if (collapsed) {
                    if (width) {
                        // 这里是 52 的一半
                        titleContainerRef.current.style.left = String(26 - width / 2) + 'px';
                    }
                    else {
                        titleContainerRef.current.style.left = 'unset';
                    }
                }
                else {
                    titleContainerRef.current.style.left = `${40 + indent}px`;
                }
            }
        },
        [collapsed, indent],
    );

    const tooltipTitle = useMemo(
        () => {
            if (tooltip) {
                return tooltip;
            }
            if (collapsed && shortTitle !== title) {
                return title;
            }
        },
        [collapsed, shortTitle, title, tooltip],
    );

    return (
        <Tooltip placement="right" title={tooltipTitle}>
            <MenuItemContainer
                isActive={isActive}
                level={level}
                item={item}
            >
                <IconContainer className={collapsed ? collapsedIconCss : expandedIconCss}>
                    {icon}
                </IconContainer>
                <TitleContainer
                    ref={titleContainerRef}
                    className={collapsed ? collapsedTitleCss : expandedTitleCss}
                >
                    {collapsed ? shortTitle : title}
                </TitleContainer>
            </MenuItemContainer>
        </Tooltip>
    );
};
