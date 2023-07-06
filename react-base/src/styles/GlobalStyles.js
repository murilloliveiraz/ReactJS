import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    background: ${primaryColor};
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
