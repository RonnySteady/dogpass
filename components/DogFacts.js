import useSWR from 'swr';
import styled from 'styled-components';

const fetchDogFacts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); 
  return data.data;
};

const DogFacts = () => {
  const { data: dogFacts, error } = useSWR(
    'https://dogapi.dog/api/v2/facts',
    fetchDogFacts
  );

  if (error) {
    console.error('Error fetching dog facts:', error);
  }

  return (
    <StyledFactCard>
      <h3>Dog Facts</h3>
      {dogFacts ? (
        <Fact>
          {dogFacts.map((fact) => (
            <li key={fact.id}>{fact.attributes.body}</li>
          ))}
        </Fact>
      ) : (
        <p>Loading dog facts...</p>
      )}
    </StyledFactCard>

  );
};

export default DogFacts;



const StyledFactCard = styled.ul`
  width: 350px;
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

const Fact = styled.li`
    list-style-type: none;
  `
  