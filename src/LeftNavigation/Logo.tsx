import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {colors} from '../constants/colors';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-bottom: 1px solid ${colors['gray-4']};
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
    icon: ReactNode;
    title: ReactNode;
}

const Logo = ({collapsed, icon, title}: Props) => {
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>
            {!collapsed && <TitleContainer>{title}</TitleContainer>}
        </Container>
    );
};

export default Logo;
