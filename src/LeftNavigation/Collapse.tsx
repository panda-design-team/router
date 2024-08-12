import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {colors} from '../constants/colors';
import {IconCollapse} from '../icons';

const CollapseContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top: 1px solid ${colors['gray-4']};
    color: ${`var(--panda-left-navigation-color, ${colors['gray-8']})`};
    flex-shrink: 0;

    svg {
        font-size: 20px;
        width: 20px;
        height: 20px;
        top: 0;
    }

    :hover {
        color: ${`var(--panda-left-navigation-active-color, ${colors.black})`};
        background-color: ${`var(--panda-left-navigation-active-background-color, ${colors['gray-4']})`};
    }
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
        <CollapseContainer
            onClick={onClick}
        >
            <IconCollapse className={iconCss} />
        </CollapseContainer>
    );
};

export default Collapse;
