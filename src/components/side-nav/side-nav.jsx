import { Component } from 'react';
import AddForm from '../add-form/add-form';
import Contents from '../contents/contents';

import './side-nav.scss';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        const { onAddPost, posts, minSalary, maxSalary } = this.props;
        return (
            <div className="side-nav">
                <Contents
                    posts={posts}
                    minSalary={minSalary}
                    maxSalary={maxSalary} />
                <AddForm onAddPost={onAddPost}/>
                <section className="congratulations">
                    <h2>Congratulations</h2>
                    <ul>
                        <li>1. Wrtwew erfwWr Wrtwewer fwtwe werfw;</li>
                        <li>2. Wrtwewerfw;</li>
                        <li>3. Wrtwewerfw;</li>
                        <li>4. Wrtwewerfw;</li>
                        <li>5. Wrtwewerfw;</li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default SideNav;
