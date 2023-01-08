import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
    cursor: pointer;
    background-image: linear-gradient(90deg, #222, #444);
    border: 2px solid #444;
    padding: 12px 48px;
    color: white;
    border-radius: 10px;

    ${props => props.heavy && css({
        fontWeight: 'bolder',
        border: '4px solid #444',
    })}

    ${props => props.outlined && css({
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        color: '#444',
    })}
`;

export const Square = styled.div<ButtonProps>`
    width: 24px;
    height: 24px;
    background-color: ${props => {
    if(props.color === 'safe') return '#44f'
    if(props.color === 'danger') return '#f44'
    return '#4f4'
    }};
`;