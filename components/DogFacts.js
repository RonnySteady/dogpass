import useSWR from 'swr';
import styled from 'styled-components';

const fetchDogFacts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // Log the fetched data
  return data.data; // Access the dog facts array
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
      <h2>Dog Facts</h2>
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


{/* <StyledTitle>{formData.Title}</StyledTitle>
<StyledName>
  {formData.firstName} {formData.lastName}
</StyledName> */}



const StyledFactCard = styled.ul`
  width: 350px;
  padding: 15px 25px 15px 25px;
  margin-bottom: 30px;
  border-radius: 16px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
`;


const Fact = styled.li`
    list-style-type: none;
  `

