import React from 'react';
import styled from 'styled-components';

export const StyledH3 = styled.h3`
  font-size: 2.5em;
  text-align: center;
  color: darkorange;
`;

const StyledH4 = styled.h4`
  font-size: 2.3em;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  background-color: gray;
  padding: 10px;
  opacity: 0.8;
`;

const StyleP = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 0.8em;
`;

const People = props => {
  return (
    <Container>
      <StyledH3>{props.name} </StyledH3>
      <StyledH4>Facts</StyledH4>
      <StyleP>Birth Year: {props.birthday}</StyleP>
      <StyleP>Gender: {props.gender}</StyleP>
      <StyleP>Height: {props.height}</StyleP>
      <StyleP>Weight: {props.weight}</StyleP>
      <StyleP>Skin Color: {props.skin}</StyleP>
      <StyleP>Eye Color: {props.eye}</StyleP>
    </Container>
  );
};

export default People;
