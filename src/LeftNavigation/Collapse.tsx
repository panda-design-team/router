import {css, cx} from '@emotion/css';
import styled from '@emotion/styled';
import {IconCollapse} from '../icons';
import {MenuItemContainer} from './MenuItemContainer';
import {useOptionsContext} from './Context';

const Container = styled.div`
    display: flex;
    justify-content: end;
`;

const itemCss = css`
    height: 40px !important;
`;

const itemExpandedCss = css`
    width: 40px !important;
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
        <Container>
            <MenuItemContainer
                isActive={false}
                item={{className: cx(itemCss, !collapsed && itemExpandedCss), onClick} as any}
            >
                <IconCollapse className={iconCss} />
            </MenuItemContainer>
        </Container>
    );

};
