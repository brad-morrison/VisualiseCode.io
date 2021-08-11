import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { InputSwitch } from 'primereact/inputswitch';
import classNames from 'classnames';

const AppConfig = (props) => {

	const themes = [
		{ name: 'blue', color: '#2c84d8' },
		{ name: 'green', color: '#34B56F' },
		{ name: 'orange', color: '#FF810E' },
		{ name: 'turquoise', color: '#58AED3' },
		{ name: 'avocado', color: '#AEC523' },
		{ name: 'purple', color: '#464DF2' },
		{ name: 'red', color: '#FF9B7B' },
		{ name: 'yellow', color: '#FFB340' },
	];

	useEffect(() => {
		changeColorScheme(props.colorScheme)
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const changeTheme = (theme) => {
		props.onThemeChange(theme)
		changeStyleSheetsColor('theme-css', theme, 2);
	};

	const changeColorScheme = (scheme) => {
		changeStyleSheetsColor('layout-css', 'layout-' + scheme + '.css', 1);
		changeStyleSheetsColor('theme-css', 'theme-' + scheme + '.css', 1);

		props.onColorSchemeChange(scheme);
		props.onMenuSchemeChange(scheme);
		props.onTopbarSchemeChange(scheme);
		props.onThemeSchemeChange(scheme);
	};

	const changeStyleSheetsColor = (id, value, from) => {
		const element = document.getElementById(id);
		const urlTokens = element.getAttribute('href').split('/');

		if (from === 1) {           // which function invoked this function - change scheme
			urlTokens[urlTokens.length - 1] = value;
		} else if (from === 2) {       // which function invoked this function - change color
			urlTokens[urlTokens.length - 2] = value;
		}

		const newURL = urlTokens.join('/');

		replaceLink(element, newURL);
	};

	const replaceLink = (linkElement, href) => {
		if (isIE()) {
			linkElement.setAttribute('href', href);
		} else {
			const id = linkElement.getAttribute('id');
			const cloneLinkElement = linkElement.cloneNode(true);

			cloneLinkElement.setAttribute('href', href);
			cloneLinkElement.setAttribute('id', id + '-clone');

			linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

			cloneLinkElement.addEventListener('load', () => {
				linkElement.remove();
				cloneLinkElement.setAttribute('id', id);
			});
		}
	};

	const isIE = () => {
		return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
	};

	const getThemes = () => {
		return (
			<div className="layout-themes">
				{
					themes.map(theme => {
						return (
							<div key={theme.name}>
								<button type="button" className="p-link layout-config-option-color" style={{ cursor: 'pointer', 'backgroundColor': theme.color }} onClick={() => changeTheme(theme.name)} title={theme.name}>
									{props.theme === theme.name && <span className="check p-d-flex p-ai-center p-jc-center">
										<i className="pi pi-check" style={{ color: 'white' }}></i>
									</span>}
								</button>
							</div>
						)
					})
				}
			</div>
		)
	};

	const themeColors = getThemes();
	const configClassName = classNames('layout-config', { 'layout-config-active': props.configActive });

	return (
		<div id="layout-config">
			<Button className="p-link layout-config-button" icon="pi pi-cog" onClick={props.onConfigButtonClick}></Button>

			<div className={configClassName} onClick={props.onConfigClick} >
				<h5>Menu Type</h5>
				<div className="p-field-radiobutton">
					<RadioButton name="menuMode" value="horizontal" inputId="mode1" checked={props.menuMode === 'horizontal'} onChange={(e) => props.onMenuModeChange(e.value)}></RadioButton>
					<label htmlFor="mode1">Horizontal</label>
				</div>
				<div className="p-field-radiobutton">
					<RadioButton name="menuMode" value="sidebar" inputId="mode2" checked={props.menuMode === 'sidebar'} onChange={(e) => props.onMenuModeChange(e.value)}></RadioButton>
					<label htmlFor="mode2">Sidebar</label>
				</div>
				<div className="p-field-radiobutton">
					<RadioButton name="menuMode" value="slim" inputId="mode3" checked={props.menuMode === 'slim'} onChange={(e) => props.onMenuModeChange(e.value)}></RadioButton>
					<label htmlFor="mode3">Slim</label>
				</div>
				<hr />

				<h5>Color Scheme</h5>
				<div className="p-field-radiobutton">
					<RadioButton name="colorScheme" value="light" inputId="colorScheme1" checked={props.colorScheme === 'light'} onChange={(e) => changeColorScheme(e.value)}></RadioButton>
					<label htmlFor="colorScheme1">Light</label>
				</div>
				<div className="p-field-radiobutton">
					<RadioButton name="colorScheme" value="dark" inputId="colorScheme2" checked={props.colorScheme === 'dark'} onChange={(e) => changeColorScheme(e.value)}></RadioButton>
					<label htmlFor="colorScheme2">Dark</label>
				</div>

				<hr />

				{props.menuMode === 'horizontal' &&
					<div>
						<h5>Topbar and Menu Mode</h5>
						<div className="p-field-radiobutton">
							<RadioButton name="themeScheme" value="light" inputId="themeScheme1" disabled={props.colorScheme === 'dark'} checked={props.themeScheme === 'light'} onChange={(e) => props.onThemeSchemeChange(e.value)}></RadioButton>
							<label htmlFor="theme1">Light</label>
						</div>
						<div className="p-field-radiobutton">
							<RadioButton name="themeScheme" value="dark" inputId="themeScheme2" disabled={props.colorScheme === 'dark'} checked={props.themeScheme === 'dark'} onChange={(e) => props.onThemeSchemeChange(e.value)}></RadioButton>
							<label htmlFor="theme2">Dark</label>
						</div>
					</div>}

				{props.menuMode !== 'horizontal' &&
					<div>
						<h5>Topbar Mode</h5>
						<div className="p-field-radiobutton">
							<RadioButton name="topbarScheme" value="light" inputId="topbarScheme1" disabled={props.colorScheme === 'dark'} checked={props.topbarScheme === 'light'} onChange={(e) => props.onTopbarSchemeChange(e.value)}></RadioButton>
							<label htmlFor="topbarScheme1">Light</label>
						</div>
						<div className="p-field-radiobutton">
							<RadioButton name="topbarScheme" value="dark" inputId="topbarScheme2" disabled={props.colorScheme === 'dark'} checked={props.topbarScheme === 'dark'} onChange={(e) => props.onTopbarSchemeChange(e.value)}></RadioButton>
							<label htmlFor="topbarScheme2">Dark</label>
						</div>
					</div>
				}

				<hr />

				{props.menuMode !== 'horizontal' &&
					<div>
						<h5>Menu Mode</h5>
						<div className="p-field-radiobutton">
							<RadioButton name="menuScheme" value="light" inputId="menuScheme1" disabled={props.colorScheme === 'dark'} checked={props.menuScheme === 'light'} onChange={(e) => props.onMenuSchemeChange(e.value)}></RadioButton>
							<label htmlFor="menuScheme1">Light</label>
						</div>
						<div className="p-field-radiobutton">
							<RadioButton name="menuScheme" value="dark" inputId="menuScheme2" disabled={props.colorScheme === 'dark'} checked={props.menuScheme === 'dark'} onChange={(e) => props.onMenuSchemeChange(e.value)}></RadioButton>
							<label htmlFor="menuScheme2">Dark</label>
						</div>
					</div>
				}

				{props.menuMode !== 'horizontal' && <hr />}

				<h5>Ripple Effect</h5>
				<InputSwitch checked={props.ripple} onChange={props.onRippleChange} />

				<hr />

				<h5>Input Background</h5>
				<div className="p-field-radiobutton">
					<RadioButton inputId="input_outlined" name="inputstyle" value="outlined" checked={props.inputStyle === 'outlined'} onChange={(e) => props.onInputStyleChange(e.value)} />
					<label htmlFor="input_outlined">Outlined</label>
				</div>
				<div className="p-field-radiobutton">
					<RadioButton inputId="input_filled" name="inputstyle" value="filled" checked={props.inputStyle === 'filled'} onChange={(e) => props.onInputStyleChange(e.value)} />
					<label htmlFor="input_filled">Filled</label>
				</div>

				<hr />

				<h5>Theme Colors</h5>
				{themeColors}

			</div>
		</div>
	);
}


export default AppConfig;
