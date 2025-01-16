import {css} from '@emotion/css';
import {IconCollapse} from '../icons';
import {MenuItemContainer} from './MenuItemContainer';

const itemCss = css`
    height: 40px !important;
`;

interface Props {
    collapsed: boolean;
    onClick: () => void;
}

const Collapse = ({collapsed, onClick}: Props) => {
    const iconCss = css`
        transform: ${collapsed ? 'rotate(180deg)' : 'unset'};
    `;
    return (
        <MenuItemContainer
            collapsed={collapsed}
            isActive={false}
            item={{className: itemCss, onClick} as any}
        >
            <IconCollapse className={iconCss} />
        </MenuItemContainer>
    );
};

export default Collapse;
