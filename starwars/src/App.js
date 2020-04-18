import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';

const CharContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then(response => setData(response.data.results));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharContainer>
        {data.map((char, index) => (
          <Character 
            key={index} 
            name={char.name} 
            birth_year={char.birth_year}
            eye_color={char.eye_color}
            gender={char.gender}
            hair_color={char.hair_color} 
          />
        ))}
      </CharContainer>
    </div>
  );
}

export default App;
