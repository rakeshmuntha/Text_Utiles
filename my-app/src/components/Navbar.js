import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

	const ref = useRef();

	 useEffect(() => {
    if (ref.current) {
      ref.current.click(); // Call click() only once after component mounts
    }
  }, []);

	return (
		<div className='rakesh'>
			<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{height: '4.2rem'}}>
				<div className="container-fluid">
					<Link className="navbar-brand" to="" style={{padding: '1rem', fontSize:'23px'}}>{props.title}</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							
						</ul>
						<div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
							<input style={{cursor: 'pointer'}} ref={ref} className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault" defaultChecked />
								<label style={{cursor: 'pointer'}} className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

// ✅ Correct position
Navbar.defaultProps = {
	title: 'Rakesh',
	about: 'this is rakesh',
};

export default Navbar;