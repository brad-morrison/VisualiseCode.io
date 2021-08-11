import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

export const NotFound = (props) => {

	const history = useHistory();
	
	const goDashboard = () => {
		history.push('/')
	}


	return (
		<div className="exception-body notfound">
			<div className="exception-topbar">
				<button id="logolink" onClick={goDashboard} className="layout-topbar-logo p-link">
				<img src={`assets/layout/images/logo-${props.colorScheme === 'dark' ? 'freya-white' : 'freya'}.svg`} alt="freya-layout" />
				</button>
			</div>
			<div className="exception-wrapper">
				<div className="exception-content">
					<img src="assets/layout/images/pages/asset-404.svg" alt="freya-layout" />
					<span>404</span>
					<span className="exception-subtitle">Looks like you are lost.</span>
					<Button type="button" label="Go back to home" onClick={goDashboard} ></Button>
				</div>
				<div className="exception-footer p-mt-4">
					<h4>freya</h4>
					<h6>Copyright Ⓒ PrimeTek Informatics</h6>
				</div>
			</div>
		</div>
	)
}