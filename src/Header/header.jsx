import React from 'react'
import LOGO from '../assests/logo.png'

const Header = () => {
    return (
        <nav  className ="navbar navbar-expand-lg">
            <div className="container">
                <img src={LOGO} alt="logo"  />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5 fw-medium">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Services</a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link ">Contact Us</a>
                        </li>
                    </ul>
                   <div>
                    <div className='d-flex justify-content-between'>
                    <button className='btn border-0 bg-white fs-5 me-3'>Login</button>
                    <button className='btn btn-warning rounded-pill py-3 px-4 border-0 text-white fw-medium'>Book scooter</button>
                    </div>
                   </div>
                </div>
            </div>
        </nav>
    )
}

export default Header