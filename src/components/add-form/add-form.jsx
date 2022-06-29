import { Component } from 'react';

import './add-form.scss';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPost(this.state.title, this.state.content, this.state.salary);
        this.setState({
            title: '',
            content: '',
            salary: ''
        })
    }

    render() {
        const {title, content, salary} = this.state;

        return (
            <section className="add-form">
                <h2>Add New Poster</h2>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        name="title"
                        value={title}
                        placeholder="Title?"
                        onChange={this.onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        name="content"
                        value={content}
                        placeholder="Content?"
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        placeholder="Salary?"
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn-dark">
                        Add
                    </button>
                </form>
            </section>
        );
    }
}

export default AddForm;
