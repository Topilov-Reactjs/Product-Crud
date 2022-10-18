import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.styles.scss";
import { useNavigate } from 'react-router-dom';

function Navbar({ loggedIn }) {

    const navigate = useNavigate();

    function loginExit() {
        if (loggedIn) {
            localStorage.removeItem('token');
            navigate('/')
        }
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div>
                    {
                        !loggedIn ?
                            <Link to="/">Login Page</Link>
                            : null
                    }
                </div>
                <div>
                    {
                        loggedIn ?
                            <button onClick={loginExit} type="button">Exit</button>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;