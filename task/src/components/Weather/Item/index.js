import { compose, lifecycle, withState, mapProps } from 'recompose';
import weatherApi from '../../../services/Weather';

import Item from './Item';

const withWeatherItem = compose(
    withState('weather', 'updateWeather', {}),
    lifecycle({
        async componentDidMount() {
            const { updateWeather, id } = this.props;
            const {
                data: { name, main },
            } = await weatherApi.getWeatherByCityId(id);
            updateWeather({ name, main });
        },
    }),
    mapProps(({ weather }) => ({ ...weather }))
);

export default withWeatherItem(Item);
