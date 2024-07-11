import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSmall from '../assets/images/Cerchioviola Small.jpg';
import { Link } from 'react-router-dom';

const _Navbar = () => {
    return (
        <Navbar className='navbar' data-bs-theme="dark">
            <Container>
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <Link className='noDecoration' to={'/'}>
                        <div className="logo-brand d-flex align-items-center" >
                            <img href="#" className='myCursor' src={logoSmall} alt="logo" style={{ height: "50px" }} />
                            <Navbar.Brand href="#"><h4 className='m-0'>cerchioviola</h4></Navbar.Brand>
                        </div>
                    </Link>
                    <div>
                        <a className="noDecoration grayColor me-3" href="#">animations</a>
                        <a className="noDecoration grayColor me-3" href="#">pricing</a>
                    </div>
                    <div>
                        <i className="bi bi-circle text-light myCursor p-2"></i>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default _Navbar