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
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
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
        <h3>Search 
        <SearchField
          type="text"
          placeholder=' for dog race'
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        </h3>
        {loading ? (
          <p></p>
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
            <h3>{dogData[0].name}</h3>
            <br></br>  
          <Activity>
          <p>Playfulness: {dogData[0].playfulness}</p>
          <p>Trainability: {dogData[0].trainability}</p>
          <p>Barking: {dogData[0].barking}</p>
          <p>Coat length: {dogData[0].coat_length}</p>
          {/* <p>Drooling: {dogData[0].drooling}</p> */}
          {/* <p>Grooming: {dogData[0].grooming}</p> */}
          {/* <p>Energy Level: {dogData[0].energy}</p> */}
          </Activity>  
          <Social>
          <p>Good with</p>
          <p> other dogs: {dogData[0].good_with_other_dogs}</p>
          <p> children: {dogData[0].good_with_children}</p>
          <p> strangers: {dogData[0].good_with_strangers}</p>
          </Social>
            </>
          )
        )}
      </StyledRaceSearch>
    );
  };
  
  export default RaceSearch;
  


  const StyledRaceSearch = styled.ul`
  width: 350px;
  max-height: 58vh;
  padding: 15px 25px 15px 25px;
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
  width: 100%;
  position: relative;
  overflow: hidden;
  /* border-radius: 6px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); */
  margin-top: 18px;
  margin-bottom: 12px;
  `;


const SearchField = styled.input`
  width: 160px;
  margin-left: 3px;
  margin-right: 6px;
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 5px;
`

const SearchButton = styled.button`
  position: relative;
  top: 1px;
  width: 70px;
  background-color: #445540;
  color: whitesmoke;
  padding: 5px;
  border-radius: 6px;
  grid-column: 2;
  grid-row: 20;
  `


const Activity = styled.div`
  position: relative;
  top: -10px;
  left: 0px;
`

const Social = styled.div`
  position: relative;
  top: -98px;
  left: 155px;
`