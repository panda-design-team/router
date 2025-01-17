import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import {ReactNode, useCallback} from 'react';
import {css, cx} from '@emotion/css';
import {calculated, variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';
import {useOptionsContext} from './Context';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    transition: width 0.3s, height 0.3s;

    :hover {
        background-color: ${variables.hoverBg};
    }
`;

const activeContainerCss = css`
    color: ${variables.activeColor};
    background-color: ${variables.activeBg};
`;

const inactiveContainerCss = css`
    color: ${variables.color};
    background-color: unset;
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

interface Props {
    isActive: boolean;
    item: LeftNavigationMenuItem;
    children: ReactNode;
}

// eslint-disable-next-line complexity
export const MenuItemContainer = ({isActive, item, children}: Props) => {
    const {collapsed} = useOptionsContext();
    const navigate = useNavigate();
    const {
        to,
        className,
        style,
        onClick,
    } = item;

    const handleClick = useCallback(
        () => {
            if (to) {
                navigate(to);
            }
            onClick?.();
        },
        [navigate, onClick, to]
    );

    return (
        <Container
            className={cx(
                    className as any,
                    isActive ? activeContainerCss : inactiveContainerCss,
                    collapsed ? collapsedContainerCss : expandedContainerCss
            )}
            style={style as any}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};
