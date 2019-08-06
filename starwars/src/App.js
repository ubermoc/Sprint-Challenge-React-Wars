import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import People from './components/People';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Button = styled.div``;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}&format=json`)
      .then(res => {
        setData(res.data.results);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(fetchData, [page]);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>

      <h2>Characters And Traits</h2>
      <AppContainer>
        {data.map((rebels, index) => {
          return (
            <People
              name={rebels.name}
              birthday={rebels.birth_year}
              eye={rebels.eye_color}
              height={rebels.height}
              weight={rebels.mass}
              gender={rebels.gender}
              skin={rebels.skin_color}
              key={index}
            />
          );
        })}
      </AppContainer>
      <div>
        <br />
        <br />
      </div>
      <Button>
        <div className='PageButtons'>
          <button
            type='button'
            class='btn btn-primary btn-dark btn-lg'
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            type='button'
            class='btn btn-primary btn-light btn-lg'
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </Button>
    </div>
  );
};

export default App;
