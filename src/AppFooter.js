import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AppFooter = () => {

    const history = useHistory();

    return (
        <div className="layout-footer">
            <div className="p-grid">
                <div className="p-col-12  p-lg-4">
                    <div className="p-grid">
                        <div className="p-col-6 ">
                            <span className="footer-menutitle">SITE MAP</span>
                            <ul>
                                <li><button className="p-link" onClick={() => history.push('/')}>Dashboard</button></li>
                                <li><button className="p-link" onClick={() => history.push('pages/crud')}>Crud</button></li>
                                <li><button className="p-link" onClick={() => history.push('/pages/invoice')}>Invoice</button></li>
                                <li><button className="p-link" onClick={() => history.push('/pages/help')}>Help</button></li>
                            </ul>
                        </div>
                        <div className="p-col-6">
                            <span className="footer-menutitle"></span>
                            <ul>
                                <li><button className="p-link" onClick={() => history.push('/pages/calendar')}>Calendar</button></li>
                                <li><button className="p-link" onClick={() => history.push('/utilities/widgets')}>Widgets</button></li>
                                <li><button className="p-link" onClick={() => history.push('/start/documentation')}>Documentation</button></li>
                                <li><a href="https://www.primefaces.org/store">Buy Now</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <span className="footer-menutitle">CONTACT US</span>
                    <ul>
                        <li>(415) 931-1624 794</li>
                        <li>Mcallister St San Francisco,</li>
                        <li>California(CA), 94102</li>
                    </ul>
                </div>
                <div className="p-col-12 p-md-6 p-lg-5">
                    <span className="footer-menutitle">NEWSLETTER</span>
                    <span className="footer-subtitle">Join our newsletter to get notification about the new features.</span>
                    <div className="newsletter-input">
                        <InputText className="newsletter-inputtext" type="text" placeholder="email address" />
                        <Button className="newsletter-button p-button-secondary" type="button" label="Join" />
                    </div>
                </div>
                <div className="p-col-12">
                    <div className="footer-bottom">
                        <h4>freya</h4>
                        <h6>Copyright Ⓒ PrimeTek Informatics</h6>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AppFooter;