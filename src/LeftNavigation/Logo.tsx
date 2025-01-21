import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';
import {MenuItemContainer} from './MenuItemContainer';
import {useOptionsContext} from './Context';

const IconContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${variables.logoIconSize};
    height: ${variables.logoIconSize};
    transition: top 0.3s, left 0.3s;

    svg {
        font-size: ${variables.logoIconSize};
        width: ${variables.logoIconSize};
        height: ${variables.logoIconSize};
        top: 0;
    }
`;

const collapsedIconCss = css`
    top: 10px; // (40 - 20) / 2
    left: 16px; // (52 - 20) / 2
`;

const expandedIconCss = css`
    top: 10px; // (40 - 20) / 2
    left: 14px; // 16 - 2
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
    item: LeftNavigationMenuItem;
}

export const Logo = ({item}: Props) => {
    const {collapsed} = useOptionsContext();
    const {
        icon,
        title,
    } = item;

    return (
        <MenuItemContainer
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
