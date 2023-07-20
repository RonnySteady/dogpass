import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styled from 'styled-components';

const RaceSearch = () => {
    const [dogData, setDogData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dogName, setDogName] = useState('');
  
    const fetchDogData = async () => {
      try {
        setLoading(true);
        const apiKey = 'qXCfPFmIeQlM//9LwibmJA==nujcRxFjGNMghqJk'; // Replace this with your actual API key
        const url = `https://api.api-ninjas.com/v1/dogs?name=${dogName}`;
        const response = await axios.get(url, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        console.log('API response:', response.data);
        setDogData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog data:', error);
        setLoading(false);
      }
    };
  
    const handleSearch = () => {
      if (dogName.trim() !== '') {
        fetchDogData();
      }
    };
  
    return (
      <StyledRaceSearch>
        <h2>Race Search</h2>
        <SearchField
          type="text"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        {loading ? (
          <p>Loading dog data...</p>
        ) : (
          dogData && (
            <>
            <PhotoContainer>
              <img
                src={dogData[0].image_link}
                alt={dogData[0].name}
                width={300} 
                height="auto" 
              />
            </PhotoContainer>          
            <p>Breed: {dogData[0].name}</p>
          <p>Energy Level: {dogData[0].energy}</p>
          <p>Trainability: {dogData[0].trainability}</p>
            </>
          )
        )}
      </StyledRaceSearch>
    );
  };
  
  export default RaceSearch;
  


  const StyledRaceSearch = styled.ul`
  width: 350px;
  padding: 15px 25px 20px 25px;
  margin-bottom: 30px;
  border-radius: 16px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  z-index: 3;
`;

const PhotoContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  `;

const SearchField = styled.input`
  width: 224px;
`
const SearchButton = styled.button`
  width: 65px;
  position: absolute;
  right: 25px;
`