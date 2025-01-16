import styled from '@emotion/styled';
import {variables} from '../constants/variables';
import {LeftNavigationMenuItem} from './interface';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
`;

const IconContainer = styled.div`
    position: absolute;
    left: 13px;
    height: 24px;

    svg {
        font-size: 24px;
        width: 24px;
        height: 24px;
        top: 0;
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    left: 40px;
    font-size: 14px;
`;

interface Props {
    collapsed: boolean;
    item: LeftNavigationMenuItem;
}

const Logo = ({collapsed, item}: Props) => {
    const {icon, title} = item;
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>
            {!collapsed && <TitleContainer>{title}</TitleContainer>}
        </Container>
    );
};

export default Logo;
