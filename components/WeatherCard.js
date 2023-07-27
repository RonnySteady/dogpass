import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from 'next/image';

const apiKey = '5X5U38B3CUJMBXMZ573TS94Y7';

const weatherIcons = {
  'clear-day': '/images/weather-clear-day.png', 
  'clear-night': '/images/weather-clear-night.png',
  'cloudy': '/images/weather-cloudy.png',
  'cloudy-day': '/images/weather-cloudy-day.png', 
  'cloudy-night': '/images/weather-cloudy-night.png', 
  'partly-cloudy-day': '/images/weather-partly-cloudy-day.png', 
  'partly-cloudy-night': '/images/weather-partly-cloudy-night.png', 
  'rainy-day': '/images/weather-rainy-day.png', 
  'rainy-night': '/images/weather-rainy-night.png', 
};


export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const city = 'Frankfurt';
      const country = 'Germany';
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Frankfurt?unitGroup=metric&key=5X5U38B3CUJMBXMZ573TS94Y7&contentType=json`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Extract the relevant weather information
  const currentConditions = weatherData.currentConditions;
  const forecastDays = weatherData.days.slice(1, 4);

  return (
    <StyledWeatherCard>
      <h3>Current Weather</h3>
      <Current>
      <p>{currentConditions.temp} °C,  {currentConditions.conditions}</p>
      <p>{currentConditions.preciptype}</p>
          <WeatherIcon
            src={getWeatherIcon(currentConditions.icon)}
            alt={currentConditions.icon}
            width={90}
            height={90}
          />
      </Current>
      <Forecast>  
      {forecastDays.map((day) => (
        <div key={day.datetime}>
          <Day>{getDayName(day.datetime)}:</Day>
          <Temp>{day.temp} °C </Temp>
          <Cond>{day.conditions}</Cond>
        </div>
      ))}
      </Forecast>
    </StyledWeatherCard>
  );
}

// Helper function to get the day name from the datetime
function getDayName(datetime) {
  const dateObj = new Date(datetime);
  const options = { weekday: 'long' };
  return dateObj.toLocaleDateString('en-US', options);
}

function getWeatherIcon(iconString) {
  // Check if the icon string exists in the weatherIcons mapping
  // If not, you can return a default icon URL or path
  return weatherIcons[iconString] || '/images/weather-clear-day.jpg';
}


const StyledWeatherCard = styled.li`
  display: grid;
  width: 350px;
  min-height: 200px;
  margin-bottom: 30px;
  padding: 15px 25px 10px 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 3;
`;


const Current = styled.div`
  margin-top: 2px;
  margin-bottom: 15px;
`;

const WeatherIcon = styled(Image)`
position: absolute;
top: 5px;
right: 15px;
`


const Forecast = styled.div`
  display: grid;
  grid-template-columns: 95px 95px 95px;
  column-gap: 8px;
`;

const Day = styled.p`
    font-size: 16px;
`

const Temp = styled.p`
    font-size: 16px;
`

const Cond = styled.p`
    font-size: 10px;
`