import styled from '@emotion/styled';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import {useCallback, useMemo} from 'react';
import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationProps} from './interface';
import MenuList from './MenuList';
import Collapse from './Collapse';
import {OptionsContextProvider} from './Context';
import {Divider} from './Divider';
import {MenuItemIconOnly} from './MenuItemIconOnly';
import {festivalExpandedCss} from './festival';

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: ${variables.top};
    left: 0;
    bottom: 0;
    background-color: ${variables.bg};
    border-right: 1px solid ${variables.borderColor};
    overflow: hidden;
    transition: width 0.3s;
    z-index: 1;
`;

const collapsedCss = css`
    width: ${variables.widthCollapsed};
    // 上下的还需讨论确定下
    padding: ${variables.paddingCollapsed};
    gap: ${variables.gapVerticalCollapsed};
`;

const expandedCss = css`
    width: ${variables.widthExpanded};
    // 上下的还需讨论确定下
    padding: ${variables.paddingExpanded};
    gap: ${variables.gapVerticalExpanded};
`;

const itemCss = css`
    height: 40px !important;
`;

const HiddenScrollbar = styled.div`
    width: calc(100% + 20px);
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 20px;
`;

const Flex1 = styled.div`
    flex: 1;
`;

const WidthPlaceholder = styled.div`
    flex-shrink: 0;
    transition: width 0.3s;
`;

export const LeftNavigation = ({
    logo,
    className,
    style,
    items,
    enableCollapse = true,
    defaultCollapsed,
    collapsed,
    onCollapse,
    enableSecondaryMenuIndent,
    enableFestival,
}: LeftNavigationProps) => {
    const [innerCollapsed, setInnerCollapsed] = useMergedState(false, {
        value: collapsed,
        defaultValue: defaultCollapsed,
    });
    const handleClick = useCallback(
        () => {
            if (enableCollapse) {
                const nextCollapsed = !innerCollapsed;
                onCollapse?.(nextCollapsed);
                setInnerCollapsed(nextCollapsed);
            }
        },
        [enableCollapse, innerCollapsed, onCollapse, setInnerCollapsed]
    );

    const context = useMemo(
        () => ({enableSecondaryMenuIndent}),
        [enableSecondaryMenuIndent]
    );

    return (
        <OptionsContextProvider value={context}>
            <Container
                className={cx(
                    className,
                    innerCollapsed ? collapsedCss : expandedCss,
                    enableFestival && (innerCollapsed ? festivalExpandedCss : festivalExpandedCss)
                )}
                style={style}
            >
                <MenuItemIconOnly collapsed={innerCollapsed} item={{className: itemCss, ...logo}} />
                <Divider collapsed={collapsed} />
                <HiddenScrollbar>
                    <MenuList collapsed={innerCollapsed} level={1} items={items} />
                </HiddenScrollbar>
                <Flex1 />
                <Divider collapsed={collapsed} />
                <Collapse collapsed={innerCollapsed} onClick={handleClick} />
            </Container>
            <WidthPlaceholder className={innerCollapsed ? collapsedCss : expandedCss} />
        </OptionsContextProvider>
    );
};
