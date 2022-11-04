import React from 'react';
import { Navbar } from 'react-bootstrap';
import JSSLogo from '../../static/img/jss.png'
import '../../scss/common/_navbar.css'
const NavBar = () => {

	return (
		<Navbar bg='light' expand='lg' className='navbar-sjce' sticky='top'>
			<Navbar.Brand
				onClick={() => {
					window.scrollTo(0, 0);
				}}>
					<a href="https://sjcealumni.vercel.app/"><img
					src={JSSLogo}
					className='d-inline-block align-top'
					alt='SJCE logo'
				/></a>
				
			</Navbar.Brand>
			<div className='title'>
				<div className='heading1'>JSS STU </div>
				<div className='sub-heading'>Alumni Portal</div>
			</div>
		</Navbar>
	);
};

export default NavBar;
