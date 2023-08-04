import {Divider} from 'antd';
import {Fragment} from 'react';
import {colors} from '@panda-design/components';
import {css} from '@emotion/css';
import {LeftNavigationProps} from './interface';
import MenuItem from './MenuItem';

const levelPrimaryCss = css`
    flex: 1;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: ${colors['gray-2']};
    width: calc(100% + 20px);
    overflow-x: hidden;
    overflow-y: auto;
`;

const levelSecondaryCss = css`
    flex: 1;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: ${colors['gray-3']};
`;

const dividerCss = css`
    margin: 4px 0 !important;
`;

interface Props {
    collapsed: boolean;
    level: 1 | 2;
    items: LeftNavigationProps['items'];
}

/* eslint-disable react/no-array-index-key */
const MenuList = ({level, collapsed, items}: Props) => {
    return (
        <div className={level === 1 ? levelPrimaryCss : levelSecondaryCss}>
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
