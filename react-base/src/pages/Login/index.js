import React from 'react';
import { useDispatch } from 'react-redux';

import * as exampleActions from '../../store/modules/example/actions';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
