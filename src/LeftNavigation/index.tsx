import styled from '@emotion/styled';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import {useCallback, useMemo} from 'react';
import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationProps} from './interface';
import {MenuList} from './MenuList';
import {Collapse} from './Collapse';
import {OptionsContextProvider} from './Context';
import {Divider} from './Divider';
import {Logo} from './Logo';

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: ${variables.top};
    left: 0;
    bottom: 0;
    background: ${variables.bg};
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

const scrollbarHide = css`
    overflow-y: auto;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    &::-webkit-scrollbar {
        display: none !important;
    }
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
    childrenElement,
    enableCollapse = true,
    defaultCollapsed,
    collapsed,
    onCollapse,
    enableSecondaryMenuIndent,
}: LeftNavigationProps) => {
    const [innerCollapsed, setInnerCollapsed] = useMergedState(false, {
        value: collapsed,
        defaultValue: defaultCollapsed,
    });
    const handleClick = useCallback(
        () => {
            const nextCollapsed = !innerCollapsed;
            onCollapse?.(nextCollapsed);
            setInnerCollapsed(nextCollapsed);
        },
        [innerCollapsed, onCollapse, setInnerCollapsed]
    );

    const context = useMemo(
        () => ({enableSecondaryMenuIndent, collapsed: innerCollapsed}),
        [enableSecondaryMenuIndent, innerCollapsed]
    );

    return (
        <OptionsContextProvider value={context}>
            <Container
                className={cx(
                    className,
                    innerCollapsed ? collapsedCss : expandedCss
                )}
                style={style}
            >
                <Logo item={{className: itemCss, ...logo}} />
                <Divider />
                <div className={scrollbarHide}>
                    <MenuList level={1} items={items} childrenElement={childrenElement} />
                </div>
                <Flex1 />
                {enableCollapse && <Collapse onClick={handleClick} />}
            </Container>
            <WidthPlaceholder className={innerCollapsed ? collapsedCss : expandedCss} />
        </OptionsContextProvider>
    );
};
