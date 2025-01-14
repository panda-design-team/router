import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {IconCollapse} from '../icons';
import {variables} from '../constants/variables';

const CollapseContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top: 1px solid ${variables.borderColor};
    color: ${variables.color};
    flex-shrink: 0;

    svg {
        font-size: 20px;
        width: 20px;
        height: 20px;
        top: 0;
    }

    :hover {
        background-color: ${variables.hoverBg};
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
