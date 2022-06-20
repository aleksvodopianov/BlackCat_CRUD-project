import { Component } from 'react';

import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        const { logo } = this.props;

        return (
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                    <h1>BlackCatLogo</h1>
                </div>
            </header>
        );
    }
}

export default Header;
