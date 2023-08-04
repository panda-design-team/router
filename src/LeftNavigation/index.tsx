import styled from '@emotion/styled';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import {useCallback, useMemo} from 'react';
import {colors} from '@panda-design/components';
import {css, cx} from '@emotion/css';
import {LeftNavigationProps} from './interface';
import Logo from './Logo';
import MenuList from './MenuList';
import Collapse from './Collapse';
import {OptionsContextProvider} from './Context';

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: var(--devops-left-navigator-top, 48px);
    left: 0;
    bottom: 0;
    background-color: ${colors['gray-2']};
    border-right: 1px solid ${colors['gray-4']};
    overflow: hidden;
    transition: width 0.3s;
`;

const WidthPlaceholder = styled.div`
    flex-shrink: 0;
    transition: width 0.3s;
`;

// keep file，后续开发新版侧边栏
const LeftNavigation = ({
    icon,
    title,
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
    /* eslint-disable indent */
    const widthCss = css`
        width: ${innerCollapsed
            ? 'var(--panda-left-navigation-width-collapsed, 50px)'
            : 'var(--panda-left-navigation-width-expanded, 160px)'
        };
    `;
    /* eslint-enable indent */

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
                className={cx(className, widthCss)}
                style={style}
            >
                <Logo collapsed={innerCollapsed} icon={icon} title={title} />
                <MenuList collapsed={innerCollapsed} level={1} items={items} />
                <Collapse collapsed={innerCollapsed} onClick={handleClick} />
            </Container>
            <WidthPlaceholder className={widthCss} />
        </OptionsContextProvider>
    );
};

export default LeftNavigation;
