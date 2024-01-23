import styled from '@emotion/styled';
import {colors} from '@panda-design/components';
import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback, useLayoutEffect, useMemo, useRef} from 'react';
import {Tooltip} from 'antd';
import {css, cx} from '@emotion/css';
import {LeftNavigationMenuItem} from './interface';
import {useOptionsContext} from './Context';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    transition: width 0.3s, height 0.3s;

    :hover {
        background-color: ${`var(--panda-left-navigation-active-background-color, ${colors['gray-4']})`};
    }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 10px;
    width: 20px;
    height: 20px;
    
    svg {
        font-size: 20px;
        width: 20px;
        height: 20px;
        top: 0;
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    transition: top 0.3s, left 0.3s;
`;

const collapsedTitleCss = css`
    top: 30px;
    font-size: 12px;
`;

const expandedTitleCss = css`
    top: 9px;
    font-size: 14px;
    line-height: ${22 / 14};
`;

const activeContainerCss = css`
    color: var(--panda-left-navigation-active-color, ${colors.black});
    background-color: var(--panda-left-navigation-active-background-color, ${colors['gray-4']});
`;

const inactiveContainerCss = css`
    color: var(--panda-left-navigation-color, ${colors['gray-8']});
    background-color: unset;
`;

const collapsedContainerCss = css`
    width: 49px;
    height: 56px;
`;

const expandedContainerCss = css`
    width: 159px;
    height: 40px;
`;

const activeLeftBarCss = css`
    border-left: 4px solid var(--panda-left-navigation-active-color, ${colors.black});
`;

const inactiveLeftBarCss = css`
    border-left: 4px solid transparent;
`;

interface Props {
    collapsed: boolean;
    level: 1 | 2;
    item: LeftNavigationMenuItem;
}

// eslint-disable-next-line complexity
const MenuItem = ({level, collapsed, item}: Props) => {
    const {enableSecondaryMenuIndent, enableMenuActiveLeftBar} = useOptionsContext();
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        to,
        icon,
        title,
        shortTitle = title,
        className,
        style,
        onClick,
        tooltip,
    } = item;
    const isActive = item.isActive ?? location.pathname.startsWith(to as string);
    const indentWithoutLeftBar = level === 2 ? (enableSecondaryMenuIndent ?? 0) : 0;
    const indent = enableMenuActiveLeftBar ? indentWithoutLeftBar - 4 : indentWithoutLeftBar;

    useLayoutEffect(
        () => {
            if (titleContainerRef.current) {
                const {width} = titleContainerRef.current?.getBoundingClientRect() ?? {};
                if (collapsed) {
                    if (width) {
                        titleContainerRef.current.style.left = String(25 - width / 2) + 'px';
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
        [collapsed, indent]
    );

    const handleClick = useCallback(
        () => {
            if (to) {
                navigate(to);
            }
            onClick?.();
        },
        [navigate, onClick, to]
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
        [collapsed, shortTitle, title, tooltip]
    );

    return (
        <Tooltip placement="right" title={tooltipTitle}>
            <Container
                className={cx(
                    className as any,
                    isActive ? activeContainerCss : inactiveContainerCss,
                    collapsed ? collapsedContainerCss : expandedContainerCss,
                    (enableMenuActiveLeftBar && !collapsed) ? (isActive ? activeLeftBarCss : inactiveLeftBarCss) : undefined
                )}
                style={style as any}
                onClick={handleClick}
            >
                <IconContainer className={css`left: ${collapsed ? 15 : 15 + indent}px;`}>
                    {icon}
                </IconContainer>
                <TitleContainer
                    ref={titleContainerRef}
                    className={collapsed ? collapsedTitleCss : expandedTitleCss}
                >
                    {collapsed ? shortTitle : title}
                </TitleContainer>
            </Container>
        </Tooltip>
    );
};

export default MenuItem;
