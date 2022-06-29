import { Component } from 'react';
import AddForm from '../add-form/add-form';
import Contents from '../contents/contents';
import Search from '../search/search';
import Filter from '../filter/filter';

import './side-nav.scss';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        const { onAddPost, posts, minSalary, maxSalary, onUpdateSearch, filter, onFilterSelect } = this.props;
        return (
            <div className="side-nav">
                <Contents
                    posts={posts}
                    minSalary={minSalary}
                    maxSalary={maxSalary} />
                <AddForm onAddPost={onAddPost}/>
                <Search onUpdateSearch={onUpdateSearch} />
                <Filter
                    filter={filter}
                    onFilterSelect={onFilterSelect} />
            </div>
        );
    }
}

export default SideNav;
