import styled from '@emotion/styled';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import {useCallback, useMemo} from 'react';
import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationProps} from './interface';
import Logo from './Logo';
import MenuList from './MenuList';
import Collapse from './Collapse';
import {OptionsContextProvider} from './Context';

/* eslint-disable max-len */
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
    //background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAK0lEQVQYlWN49+7df2IwA8kK7969ixVjVYhuCl6FyCZRRyFRVhPlGaqFIwBOUXXMlPbWHgAAAABJRU5ErkJggg==");
`;

const collapsedCss = css`
    width: ${variables.widthCollapsed};
    padding-left: ${variables.paddingCollapsed};
    padding-right: ${variables.paddingCollapsed};
`;

const expandedCss = css`
    width: ${variables.widthExpanded};
    padding-left: ${variables.paddingExpanded};
    padding-right: ${variables.paddingExpanded};
`;
/* eslint-enable max-len */

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
    enableMenuActiveLeftBar,
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
        () => ({
            enableSecondaryMenuIndent,
            enableMenuActiveLeftBar,
        }),
        [enableSecondaryMenuIndent, enableMenuActiveLeftBar]
    );

    return (
        <OptionsContextProvider value={context}>
            <Container
                className={cx(className, innerCollapsed ? collapsedCss : expandedCss)}
                style={style}
            >
                <Logo collapsed={innerCollapsed} item={logo} />
                <MenuList collapsed={innerCollapsed} level={1} items={items} />
                <Collapse collapsed={innerCollapsed} onClick={handleClick} />
            </Container>
            <WidthPlaceholder className={innerCollapsed ? collapsedCss : expandedCss} />
        </OptionsContextProvider>
    );
};
