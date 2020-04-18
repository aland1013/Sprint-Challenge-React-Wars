// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharWrapper = styled.div`
  width: 30%;
  margin: 0 auto 10px;
  border: 1px solid black;
  border-radius: 20px;
  background: white;
`;

const H2 = styled.h2`
  border-radius: 20px 20px 0 0;
  color: white;
  background: black;
  margin-top: 0;
  padding: 5px 0;
`;

const UL = styled.ul`
  margin: 0;
  padding: 0 0 20px;
  list-style-position: inside;
`;

const LI = styled.li`
  text-align: left;
  margin-left: 40px;
`;

const Character = (props) => {
  const { name, birth_year, eye_color, gender, hair_color } = props;

  return (
    <CharWrapper>
      <H2>{name}</H2>
      <UL>
        <LI>Birth Year: {birth_year}</LI>
        <LI>Eye Color: {eye_color}</LI>
        <LI>Gender: {gender}</LI>
        <LI>Hair Color: {hair_color}</LI>
      </UL>
    </CharWrapper>
  );
}

export default Character;