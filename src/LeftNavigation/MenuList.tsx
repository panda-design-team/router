import {Fragment, ReactNode, useMemo} from 'react';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {calculated, variables} from '../constants/variables';
import {Divider} from './Divider';
import {LeftNavigationProps} from './interface';
import {MenuItem} from './MenuItem';
import {useOptionsContext} from './Context';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    transition: width 0.3s;
`;

const getBg = (level: 1 | 2, collapse: boolean) => {
    if (level === 1) {
        return collapse ? variables.level1BgCollapsed : variables.level1BgExpanded;
    }
    return collapse ? variables.level2BgCollapsed : variables.level2BgExpanded;
};

interface Props {
    level: 1 | 2;
    items?: LeftNavigationProps['items'];
    childrenElement?: ReactNode;
}

export const MenuList = ({level, items, childrenElement}: Props) => {
    const {collapsed} = useOptionsContext();
    const dynamicCss = useMemo(
        () => {
            const bg = getBg(level, collapsed);
            return css`
                background-color: ${bg};
                gap: ${collapsed ? variables.gapVerticalCollapsed : variables.gapVerticalExpanded};
                border-radius: ${collapsed ? '4px' : '6px'};
                width: ${collapsed ? calculated.innerWidthCollapsed : calculated.innerWidthExpanded};
            `;
        },
        [level, collapsed]
    );
    return (
        <Container className={dynamicCss}>
            {items?.map((item, index) => {
                /* eslint-disable react/no-array-index-key */
                if (item.type === 'divider') {
                    return <Divider key={`divider-${index}`} />;
                }
                const element = (
                    <MenuItem
                        key={`item-${item.title}-${index}`}
                        level={level}
                        item={item}
                    />
                );
                if (item.children) {
                    return (
                        <Fragment key={`list-${item.title}-${index}`}>
                            {element}
                            <MenuList
                                level={2}
                                items={item.children}
                                childrenElement={item.childrenElement}
                            />
                        </Fragment>
                    );
                }
                return element;
                /* eslint-enable react/no-array-index-key */
            })}
            {childrenElement}
        </Container>
    );
};
