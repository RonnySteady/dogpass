import useSWR from 'swr';
import Image from 'next/image';

import styled from 'styled-components';

const fetchDogPhoto = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.message; 
};

const DogPhotos = () => {
  const { data: dogPhoto, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    fetchDogPhoto
  );

  if (error) {
    console.error('Error fetching dog photo:', error);
  }

  return (
    <StyledPhotosCard>
      <PhotoContainer>
        {dogPhoto ? (
          <Image
            alt="Dog photo"
            src={dogPhoto}
            layout="responsive"
            width={300}
            height={300}
          />
        ) : (
          <p>Loading dog photo...</p>
        )}
      </PhotoContainer>
    </StyledPhotosCard>
  );
};

export default DogPhotos;

const StyledPhotosCard = styled.ul`
  width: 350px;
  padding: 20px 25px 15px 25px;
  margin-bottom: 100px;
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
  /* overflow: hidden; */
  /* border-radius: 6px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); */
  `;
