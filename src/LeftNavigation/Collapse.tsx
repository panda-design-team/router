import {css, cx} from '@emotion/css';
import styled from '@emotion/styled';
import {IconCollapse} from '../icons';
import {variables} from '../constants/variables';
import {MenuItemContainer} from './MenuItemContainer';
import {useOptionsContext} from './Context';

const Container = styled.div`
    display: flex;
    justify-content: end;
    font-size: ${variables.iconSize};
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
        transform: ${collapsed ? 'scaleX(-1)' : 'unset'};
    `;
    return (
        <Container>
            <MenuItemContainer
                isActive={false}
                level={1}
                item={{className: cx(itemCss, !collapsed && itemExpandedCss), onClick} as any}
            >
                <IconCollapse className={iconCss} />
            </MenuItemContainer>
        </Container>
    );

};
