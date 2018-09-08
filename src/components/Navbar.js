import React from 'react';
import socketIOClient from 'socket.io-client';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
    }
    logOut() {
        localStorage.removeItem('username')
        const username = this.props.username
        const uid = localStorage.getItem('uid')
        const socket = socketIOClient('ws://localhost:8989', {
            query: 'username=' + username + '&uid=' + uid
        });
        socket.emit('logout')

    }
    render() {
        const username =this.props.username;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Chat app London</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item d-flex justify-content-end">
                            <span className='text-white m-2 text-uppercase'>Welcome {username}</span>
                            {username && <a className="nav-link" target="_blank" onClick={this.logOut} href="">Logout</a>}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;