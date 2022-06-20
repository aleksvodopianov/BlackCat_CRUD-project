import { Component } from 'react';

import DeleteIcon from '../../img/delete-icon.png';

import './list-item.scss';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, content, salary, onDeletePost} = this.props;

        return (
            <li className="list-item">
                <h2>{title}</h2>
                <p>
                    {content}
                </p>
                <div className="poster-footer">
                    <p className="salary">{salary}$</p>
                    <img
                        src={DeleteIcon}
                        alt="delete"
                        onClick={onDeletePost} />
                </div>
            </li>
        );
    }
}

export default ListItem;
