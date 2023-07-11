import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import axiosConfig from '../../services/axios';

export default function Alunos() {
  React.useEffect(() => {
    async function getData() {
      const response = await axiosConfig.get('/alunos');
      console.log(response.data);
    }

    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
    </Container>
  );
}
