import axios from 'axios';
import config from '../config';

class Weather {
    static getWeatherByCityId(cityId) {
        return axios(
            `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${
                config.weatherAPIKey
            }`
        );
    }
}

export default Weather;
