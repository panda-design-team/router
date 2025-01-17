import {css} from '@emotion/css';
import {IconCollapse} from '../icons';
import {MenuItemContainer} from './MenuItemContainer';
import {useOptionsContext} from './Context';

const itemCss = css`
    height: 40px !important;
`;

interface Props {
    onClick: () => void;
}

export const Collapse = ({onClick}: Props) => {
    const {collapsed} = useOptionsContext();
    const iconCss = css`
        transform: ${collapsed ? 'rotate(180deg)' : 'unset'};
    `;
    return (
        <MenuItemContainer
            isActive={false}
            item={{className: itemCss, onClick} as any}
        >
            <IconCollapse className={iconCss} />
        </MenuItemContainer>
    );
};
