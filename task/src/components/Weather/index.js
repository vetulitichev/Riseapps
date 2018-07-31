import { compose, mapProps } from 'recompose';

import List from './List';

const withWeather = compose(
    mapProps(() => ({
        cityList: ['706483', '703448', '702550', '709717', '696643'],
    }))
);

export default withWeather(List);
