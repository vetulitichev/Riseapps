import React from 'react';
import { string, shape, number } from 'prop-types';

import './index.css';

const Item = ({
    name,
    main: { temp, pressure, humidity, temp_min: tempMin, temp_max: tempMax },
}) => (
    <div className="weather">
        <p>City: {name}</p>
        <p>Temperature: {temp}</p>
        <p>Pressure: {pressure}</p>
        <p>Humidity: {humidity}</p>
        <p>Temperature min: {tempMin}</p>
        <p>Temperature max: {tempMax}</p>
    </div>
);

Item.propTypes = {
    name: string,
    main: shape({
        temp: number,
        pressure: number,
        humidity: number,
        tempMin: number,
        tempMax: number,
    }),
};

Item.defaultProps = {
    name: '',
    main: {
        temp: 0,
        pressure: 0,
        humidity: 0,
        tempMin: 0,
        tempMax: 0,
    },
};

export default Item;
