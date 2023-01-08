import React, { ReactNode } from 'react';

import { Container, Square } from './styles';

export interface ButtonProps {
    children?: ReactNode;
    outlined?: boolean;
    heavy?: boolean;
    color?: 'danger' | 'safe';
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
        <Square {...rest}/>
        { children }
    </Container>
  );
}

export default Button;