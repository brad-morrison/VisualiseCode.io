import React from 'react';
import { useHistory } from 'react-router-dom';

export const Access = (props) => {
	const history = useHistory();

	return (
		<div className="exception-body access">
			<div className="exception-topbar">
				<button id="logolink" onClick={() => history.push('/')} className="layout-topbar-logo p-link">
					<img src={`assets/layout/images/logo-${props.colorScheme === 'dark' ? 'freya-white' : 'freya'}.svg`} alt="freya-layout" />
				</button>
			</div>
			<div className="exception-wrapper">
				<div className="exception-content">
					<img src="assets/layout/images/pages/asset-access.svg" alt="freya-layout" />
					<span>access denied</span>
				</div>
				<div className="exception-footer">
					<h4>freya</h4>
					<h6>Copyright Ⓒ PrimeTek Informatics</h6>
				</div>
			</div>
		</div >
	)
}