import { Component } from 'react';
import ListItem from '../list-item/list-item';

import './list.scss';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        const { data, onDeletePost } = this.props;
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <ListItem
                    key={id}
                    { ...itemProps}
                    onDeletePost={() => onDeletePost(id)}/>
            )
        })

        return (
            <ul className='list'>
                { elements }
            </ul>
        );
    }
}

export default List;
