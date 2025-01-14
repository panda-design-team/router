import {Divider} from 'antd';
import {Fragment, useMemo} from 'react';
import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';
import {LeftNavigationProps} from './interface';
import MenuItem from './MenuItem';

const level1Css = css`
    display: flex;
    flex-direction: column;
    width: calc(100% + 20px);
    overflow-x: hidden;
    overflow-y: auto;
`;

const level2Css = css`
    display: flex;
    flex-direction: column;
`;

const level2CollapsedCss = css`
    width: 52px;
    border-radius: 4px;
`;

const dividerCss = css`
    margin: 4px 0 !important;
`;

const getBg = (level: 1 | 2, collapse: boolean) => {
    if (level === 1) {
        return collapse ? variables.level1BgCollapsed : variables.level1BgExpanded;
    }
    return collapse ? variables.level2BgCollapsed : variables.level2BgExpanded;
};

const getGapVertical = (collapse: boolean) => {
    return collapse ? variables.gapVerticalCollapsed : variables.gapVerticalExpanded;
};

interface Props {
    collapsed: boolean;
    level: 1 | 2;
    items: LeftNavigationProps['items'];
}

/* eslint-disable react/no-array-index-key, max-len */
const MenuList = ({level, collapsed, items}: Props) => {
    const dynamicCss = useMemo(
        () => {
            const bg = getBg(level, collapsed);
            const gapVertical = getGapVertical(collapsed);
            return css`
                background-color: ${bg};
                padding-top: ${level === 1 ? gapVertical : 0};
                padding-bottom: ${level === 1 ? gapVertical : 0};
                gap: ${gapVertical};
            `;
        },
        [level, collapsed]
    );
    return (
        <div className={cx(
            level === 1 ? level1Css : level2Css,
            dynamicCss,
            level === 2 && collapsed && level2CollapsedCss
        )}
        >
            {items.map((item, index) => {
                if (item.type === 'divider') {
                    return <Divider key={`divider-${index}`} className={dividerCss} />;
                }
                const element = (
                    <MenuItem
                        key={`item-${item.title}-${index}`}
                        level={level}
                        collapsed={collapsed}
                        item={item}
                    />
                );
                if (item.children) {
                    return (
                        <Fragment key={`list-${item.title}-${index}`}>
                            {element}
                            <MenuList collapsed={collapsed} level={2} items={item.children} />
                        </Fragment>
                    );
                }
                return element;
            })}
        </div>
    );
};
/* eslint-enable react/no-array-index-key */

export default MenuList;
