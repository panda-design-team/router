import {Link} from 'react-router-dom';
import {useMemo, ReactNode} from 'react';
import {css, cx} from '@emotion/css';
import {calculated, variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';
import {useOptionsContext} from './Context';

const containerCss = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    transition: width 0.3s, height 0.3s;
`;

const collapsedContainerCss = css`
    width: ${calculated.innerWidthCollapsed};
    height: 52px;
    border-radius: 4px;
`;

const expandedContainerCss = css`
    width: ${calculated.innerWidthExpanded};
    height: 40px;
    border-radius: 6px;
`;

const getBgActive = (level: 1 | 2, collapse: boolean) => {
    if (collapse && level === 2) {
        return variables.itemBgActiveDeep;
    }
    return variables.itemBgActive;
};

const getBgHover = (level: 1 | 2, collapse: boolean) => {
    if (collapse && level === 2) {
        return variables.itemBgHoverDeep;
    }
    return variables.itemBgHover;
};

interface Props {
    isActive: boolean;
    level: 1 | 2;
    item: LeftNavigationMenuItem;
    children: ReactNode;
}

// eslint-disable-next-line complexity
export const MenuItemContainer = ({isActive, level, item, children}: Props) => {
    const {collapsed} = useOptionsContext();
    const {
        to,
        className,
        style,
        onClick,
    } = item;
    const Component = item.to ? Link : 'div';

    const interactiveCss = useMemo(
        () => {
            const bgActive = getBgActive(level, collapsed);
            const bgHover = getBgHover(level, collapsed);
            return css`
                color: ${isActive ? variables.activeColor : variables.color};
                background-color: ${isActive ? bgActive : 'unset'};

                :focus,
                :active {
                    color: ${isActive ? variables.activeColor : variables.color};
                    background-color: ${isActive ? bgActive : 'unset'};
                }

                :hover {
                    color: ${isActive ? variables.activeColor : variables.color};
                    background-color: ${bgHover};
                }
            `;
        },
        [collapsed, isActive, level],
    );

    return (
        <Component
            to={to as string}
            className={cx(
                containerCss,
                interactiveCss,
                collapsed ? collapsedContainerCss : expandedContainerCss,
                className as any,
            )}
            style={style as any}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};
