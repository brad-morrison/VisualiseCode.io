import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { TabPanel, TabView } from 'primereact/tabview';

export const Widgets = () => {

    return (
        <>
            <h4>Reusable CSS widgets for your applications.</h4>
            <div className="layout-widgets">
                <div className="p-grid">
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <div className="card overview-box white">
                            <div className="overview-info">
                                <h6>Graphics</h6>
                                <h1>18%</h1>
                            </div>
                            <i className="pi pi-image"></i>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <div className="card overview-box blue">
                            <div className="overview-info">
                                <h6>New users (Today)</h6>
                                <h1>32</h1>
                            </div>
                            <i className="pi pi-users"></i>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <div className="card overview-box gray">
                            <div className="overview-info">
                                <h6>Uptime</h6>
                                <h1>5h12m</h1>
                            </div>
                            <i className="pi pi-globe"></i>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <div className="card overview-box darkgray">
                            <div className="overview-info">
                                <h6>Cloud users</h6>
                                <h1>4216</h1>
                            </div>
                            <i className="pi pi-cloud"></i>
                        </div>
                    </div>
                    <div className="p-col-12 p-lg-6">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="card statistics">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h6>Statistics</h6>
                                            <p className="subtitle">Europe 1</p>
                                        </div>
                                        <p className="subtitle">8 May</p>
                                    </div>
                                    <div className="p-grid">
                                        <div className="p-col-12 p-md-6">
                                            <div className="statistic-item">
                                                <div className="item-title">
                                                    <span>🐳</span>
                                                    <h5>99,99%</h5>
                                                </div>
                                                <h6>Uptime/year</h6>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-md-6">
                                            <div className="statistic-item">
                                                <div className="item-title">
                                                    <span>🖥 </span>
                                                    <h5>2K</h5>
                                                </div>
                                                <h6>Connected devices</h6>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-md-6">
                                            <div className="statistic-item">
                                                <div className="item-title">
                                                    <span>🎁 </span>
                                                    <h5>244</h5>
                                                </div>
                                                <h6>Thanks messages received</h6>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-md-6">
                                            <div className="statistic-item">
                                                <div className="item-title">
                                                    <span>💵 </span>
                                                    <h5>4812$</h5>
                                                </div>
                                                <h6>Earnings/month</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-12">
                                <div className="card team">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h6>Team</h6>
                                            <p className="subtitle">22 People</p>
                                        </div>
                                    </div>
                                    <div className="peoples">
                                        <img src="assets/demo/images/dashboard/avatar/avatar-1.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-2.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-3.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-4.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-5.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-6.png" alt="freya-layout" />
                                        <div className="no-picture" style={{background: '#BAE6FF'}}><span>AT</span></div>
                                        <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                                        <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                                        <div className="no-picture "><span>+18</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-12">
                                <div className="notification">
                                    <h6>👋  Hello! Welcome to Hit! Before start please complete your profile to know you better. <button className="p-link">Profile settings <i className="pi pi-arrow-up"></i></button></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-col-12 p-lg-6">
                        <div className="card stocks">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6>👓 Stock watchlist (12)</h6>
                                    <p className="subtitle">Today</p>
                                </div>
                                <Button type="button" icon="pi pi-plus" className="p-button-secondary p-button-text p-button-rounded"></Button>
                            </div>
                            <ul>
                                <li className="down">
                                    <div className="stock-name">
                                        <h6>AMD</h6>
                                    </div>
                                    <img src="assets/demo/images/dashboard/mini-graph-1.svg" alt="freya-layout" />
                                    <div className="stock-price">
                                        <i className="pi pi-arrow-down"></i>
                                        <h6>54.20</h6>
                                    </div>
                                    <div className="stock-status">
                                        <span>0.57%</span>
                                        <span>4.01</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="stock-name">
                                        <h6>MSFT</h6>
                                    </div>
                                    <img src="assets/demo/images/dashboard/mini-graph-2.svg" alt="freya-layout" />
                                    <div className="stock-price">
                                        <i className="pi pi-arrow-down"></i>
                                        <h6>183.16</h6>
                                    </div>
                                    <div className="stock-status">
                                        <span>1.46%</span>
                                        <span>4.01</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="stock-name">
                                        <h6>AAPL</h6>
                                    </div>
                                    <img src="assets/demo/images/dashboard/mini-graph-3.svg" alt="freya-layout" />
                                    <div className="stock-price">
                                        <i className="pi pi-arrow-down"></i>
                                        <h6>307.20</h6>
                                    </div>
                                    <div className="stock-status">
                                        <span>0.59%</span>
                                        <span>4.01</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="stock-name">
                                        <h6>TSLA</h6>
                                    </div>
                                    <img src="assets/demo/images/dashboard/mini-graph-4.svg" alt="freya-layout" />
                                    <div className="stock-price">
                                        <i className="pi pi-arrow-down"></i>
                                        <h6>799.17</h6>
                                    </div>
                                    <div className="stock-status">
                                        <span>0.52%</span>
                                        <span>4.01</span>
                                    </div>
                                </li>
                                <li className="same">
                                    <div className="stock-name">
                                        <h6>AMZN</h6>
                                    </div>
                                    <img src="assets/demo/images/dashboard/mini-graph-5.svg" alt="freya-layout" />
                                    <div className="stock-price">
                                        <i className="pi pi-minus"></i>
                                        <h6>799.17</h6>
                                    </div>
                                    <div className="stock-status">
                                        <span>0.52%</span>
                                        <span>4.01</span>
                                    </div>
                                </li>
                            </ul>
                            <button className="p-link">Show all</button>
                            <Button type="button" label="Go to full stock page"></Button>
                        </div>
                    </div>

                    <div className="p-col-12  p-md-3">
                        <div className="card map">
                            <img src="assets/demo/images/dashboard/asset-map.png" alt="freya-layout" />
                            <div className="map-content">
                                <h6>Last active region (data traffic)</h6>
                                <div className="city">
                                    <span><span>1</span> Tokyo</span>
                                    <span className="status">22%</span>
                                </div>
                                <div className="city">
                                    <span><span>2</span> London</span>
                                    <span className="status">22%</span>
                                </div>
                                <button className="p-link">See all</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-col-12  p-md-6">
                        <div className="card chat">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6>Chat</h6>
                                </div>
                            </div>
                            <TabView>
                                <TabPanel header={<><img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" /><span className="p-badge">3</span></>}>
                                    <div className="chat">
                                        <span className="fade"></span>
                                        <div className="chat-content">
                                            <div className="chat-message send">
                                                <span className="name">You</span>
                                                <div className="message">
                                                    <p>Hey M. hope you are well. Our idea is accepted by the board. Now it’s time to execute it.</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                                <div className="message">
                                                    <p>we did it! 🤠</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message">
                                                <span className="name">Micheal J.</span>
                                                <div className="message">
                                                    <p>That’s really good!</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message send">
                                                <span className="name">You</span>
                                                <div className="message">
                                                    <p>But it’s important to ship MVP ASAP</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message">
                                                <span className="name">Micheal J.</span>
                                                <div className="message">
                                                    <p>I’ll be looking at the process then, just to be sure 🤓 </p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message send">
                                                <span className="name">You</span>
                                                <div className="message">
                                                    <p>That’s awesome. Thanks!</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message">

                                            </div>
                                        </div>
                                        <div className="chat-input">
                                            <InputText type="text" placeholder="Write here..." />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header={<><img src="assets/demo/images/rightpanel/profile-2.png" alt="freya-layout" /><span className="p-badge">1</span></>}>
                                    <div className="chat">
                                        <span className="fade"></span>
                                        <div className="chat-content">
                                            <div className="chat-message">
                                                <span className="name">Sarah</span>
                                                <div className="message">
                                                    <p>That’s really good!</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message send">
                                                <span className="name">You</span>
                                                <div className="message">
                                                    <p>But it’s important to ship MVP ASAP</p>
                                                    <span>3 mins ago</span>
                                                </div>
                                            </div>
                                            <div className="chat-message">

                                            </div>
                                        </div>
                                        <div className="chat-input">
                                            <InputText type="text" placeholder="Write here..." />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header={<img src="assets/demo/images/rightpanel/profile-3.png" alt="freya-layout" />}>
                                    <div className="chat">
                                        <div className="chat-content no-message">
                                            <h4>No Message From Margret K.</h4>
                                        </div>
                                        <div className="chat-input">
                                            <input pInputText type="text" placeholder="Write here..." />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header={<img src="assets/demo/images/rightpanel/profile-4.png" alt="freya-layout" />}>

                                    <div className="chat">
                                        <div className="chat-content no-message">
                                            <h4>No Message From Bob C.</h4>
                                        </div>
                                        <div className="chat-input">
                                            <InputText type="text" placeholder="Write here..." />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header={<i className="pi pi-plus"></i>}>
                                    <div className="chat">
                                        <span className="fade"></span>
                                        <div className="contacts">
                                            <ul>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-2.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-3.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-4.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
                                                    <div className="contact-info">
                                                        <h6>John Doe</h6>
                                                        <span>Active</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="chat-input">
                                            <InputText type="text" placeholder="Search new person" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>

                    <div className="p-col-12  p-md-3">
                        <div className="card image-card">
                            <span className="ui-badge">3</span>
                            <img src="assets/demo/images/dashboard/asset-image.jpg" alt="freya-layout" />
                            <div className="image-content">
                                <h6>Shared team pictures</h6>
                                <p>Work can be overwhelming, so we need to take time and do activities. See who is doing in other officess!</p>
                                <Button type="button" label="Aww, let me see them!" />
                            </div>
                        </div>
                    </div>

                    <div className="p-col-12 p-lg-6">
                        <div className="card timeline">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6>Timeline</h6>
                                    <p className="subtitle">All servers</p>
                                </div>
                            </div>
                            <ul>
                                <li className="blue">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">New Sale</span>
                                        <span>Richard Jones has purchased a blue t-shirt for $79.</span>
                                        <span className="time">3 mins ago</span>
                                    </div>
                                </li>
                                <li className="blue">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">Log</span>
                                        <span>AWS settings are updated by admin@freya.com</span>
                                        <span className="time">12 mins ago</span>
                                    </div>
                                </li>
                                <li className="green">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">Capacity</span>
                                        <span>Reached 80% CPU capacity in Ireland. Automatic
                                                    capacity increase initiated.</span>
                                        <span className="time">1:30PM</span>
                                    </div>
                                </li>
                                <li className="orange">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">Capacity</span>
                                        <span>Reached 60% CPU capacity in Ireland.</span>
                                        <span className="time">9:40AM</span>
                                    </div>
                                </li>
                                <li className="blue">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">Billing</span>
                                        <span>Upgraded plan, 10users yearly to 20users yearly</span>
                                        <span className="time">7:42AM</span>
                                    </div>
                                </li>
                                <li className="blue">
                                    <i className="pi pi-circle-on"></i>
                                    <div className="event-content">
                                        <span className="event-title">New Sale</span>
                                        <span>Richard Jones has purchased a blue t-shirt for $79.</span>
                                        <span className="time">3 mins ago</span>
                                    </div>
                                </li>
                            </ul>
                            <button className="p-link">See all</button>
                        </div>
                    </div>

                    <div className="p-col-12 p-lg-6">
                        <div className="card schedule">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6>Schedule</h6>
                                    <p className="subtitle">Europe office</p>
                                </div>
                                <p className="subtitle">Today</p>
                            </div>
                            <p>3 events, 3h 30m</p>
                            <ul>
                                <li>
                                    <div className="schedule-header">
                                        <h6>Daily talks over Zoom w/ teamA</h6>
                                        <span>8:00 - 9:00</span>
                                    </div>
                                    <button className="p-link">Join over Zoom</button>
                                    <span>6 participiants (4 accepted)</span>
                                </li>
                                <li>
                                    <div className="schedule-header">
                                        <h6>New Project Kick, v1</h6>
                                        <span>8:00 - 9:00</span>
                                    </div>
                                    <button className="p-link">Join over Zoom</button>
                                    <span>3 participiants (all accepted)</span>
                                </li>
                                <li>
                                    <div className="schedule-header">
                                        <h6>Grooming btw TeamA and SR1E</h6>
                                        <span>8:00 - 9:00</span>
                                    </div>
                                    <button className="p-link">Master room</button>
                                    <span>12 participiants (11 accepted)</span>
                                </li>
                            </ul>
                            <button className="p-link">Go to full schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}