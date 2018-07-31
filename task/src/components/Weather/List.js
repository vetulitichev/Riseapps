import React from 'react';
import v4 from 'uuid/v4';
import { arrayOf, string } from 'prop-types';

import Item from './Item';

const List = ({ cityList }) => <div>{cityList.map(item => <Item key={v4()} id={item} />)}</div>;

List.propTypes = {
    cityList: arrayOf(string).isRequired,
};

export default List;
