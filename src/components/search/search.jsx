import { Component } from "react";

import './search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdate = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const { term } = this.state;

        return (
            <section className="search">
                <h2>Search</h2>
                <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
                value={term}
                onChange={this.onUpdate} />
            </section>
        )
    }
}

export default Search;
