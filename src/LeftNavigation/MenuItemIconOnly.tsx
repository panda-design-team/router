import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';
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
    top: 12px; // (40 - 16) / 2
    left: 18px;
`;

const expandedIconCss = css`
    top: 12px; // (40 - 16) / 2
    left: 16px;
`;

const TitleContainer = styled.div`
    position: absolute;
    transition: top 0.3s, left 0.3s;
    // expandedTitleCss
    top: 9px;
    font-size: 14px;
    line-height: ${22 / 14};
    // style
    left: 40px;
`;

interface Props {
    collapsed: boolean;
    item: LeftNavigationMenuItem;
}

export const MenuItemIconOnly = ({collapsed, item}: Props) => {
    const {
        icon,
        title,
    } = item;

    return (
        <MenuItemContainer
            collapsed={collapsed}
            isActive={false}
            item={item}
        >
            <IconContainer className={collapsed ? collapsedIconCss : expandedIconCss}>
                {icon}
            </IconContainer>
            {!collapsed && <TitleContainer>{title}</TitleContainer>}
        </MenuItemContainer>
    );
};
