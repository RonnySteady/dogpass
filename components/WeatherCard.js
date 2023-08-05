import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from 'next/image';
import process from 'process';


const weatherIcons = {
  'clear-day': '/images/weather-icons/clear-day.png', 
  'clear-night': '/images/weather-icons/clear-night.png',
  'cloudy': '/images/weather-icons/cloudy.png',
  'cloudy-day': '/images/weather-icons/cloudy-day.png', 
  'cloudy-night': '/images/weather-icons/cloudy-night.png', 
  'partly-cloudy-day': '/images/weather-icons/partly-cloudy-day.png', 
  'partly-cloudy-night': '/images/weather-icons/partly-cloudy-night.png', 
  'rain': '/images/weather-icons/rain.png', 
  'rainy-day': '/images/weather-icons/rainy-day.png', 
  'rainy-night': '/images/weather-icons/rainy-night.png', 
};


export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const city = 'Frankfurt';
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

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
    return <StyledWeatherCard>
      <p></p>
    </StyledWeatherCard>;
  }

  // Extract the relevant weather information
  const currentConditions = weatherData.currentConditions;
  const forecastDays = weatherData.days.slice(1, 4);

  const getCurrentDayAndDate = () => {
    const now = new Date();
    const options = { weekday: 'long'
, month: 'short', day: 'numeric', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };


  return (
    <StyledWeatherCard>
      <h3>{getCurrentDayAndDate()}</h3>
      <Current>
      <p>Temperature: {currentConditions.temp} °C</p>
        <p>{currentConditions.conditions}</p>
          <WeatherIcon
            src={getWeatherIcon(currentConditions.icon)}
            alt={currentConditions.icon}
            width={100}
            height={100}
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
  return weatherIcons[iconString] || '/images/weather-clear-day.jpg';
}


const StyledWeatherCard = styled.li`
  display: grid;
  position: relative;
  width: 350px;
  min-height: 200px;
  margin-bottom: 30px;
  padding: 15px 25px 15px 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 3;
`;


const Current = styled.div`
  margin-bottom: 15px;
`;

const WeatherIcon = styled(Image)`
position: absolute;
top: 2px;
right: 10px;
`


const Forecast = styled.div`
  display: grid;
  grid-template-columns: 95px 95px 95px;
  column-gap: 8px;
`;

const Day = styled.p`
    font-size: 16px;
    /* grid-area: 1 / 1 / 1; */
`

const Temp = styled.p`
    font-size: 16px;
    /* grid-area: 1 / 1 / 1; */
`

const Cond = styled.p`
    font-size: 10px;
    /* grid-area: 3 / 3 / 3; */
`