import styled from '@emotion/styled';
import {colors} from '@panda-design/components';
import {IconCollapse} from '../icons';
import {css} from '@emotion/css';

const CollapseContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top: 1px solid ${colors['gray-4']};
    color: ${`var(--panda-left-navigation-color, ${colors['gray-8']})`};

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
