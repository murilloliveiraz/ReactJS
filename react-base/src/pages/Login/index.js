import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
