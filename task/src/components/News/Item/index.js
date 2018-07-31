import { branch, renderComponent, compose, withState, withHandlers } from 'recompose';

import Item from './Item';
import EditItem from './Edit/index';

const withItem = compose(
    withState('isEdit', 'setIsEdit', false),
    withHandlers({
        editHandler: ({ isEdit, setIsEdit }) => () => {
            setIsEdit(!isEdit);
        },
    }),
    branch(({ isEdit }) => isEdit, renderComponent(EditItem), renderComponent(Item))
);

export default withItem(Item);
