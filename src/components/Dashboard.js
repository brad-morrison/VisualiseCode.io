import React from 'react';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';


const chart1 = {
    labels: ['8Sun', '9Mon', '10Thu', '11Wed', '12Fri', '13Sat', '14Sun'],
    datasets: [
        {
            label: 'Revenue',
            data: [12, 19, 56, 5, 2, 3, 9],
            borderColor: [
                '#FFA928',
            ],
            borderWidth: 5,
            fill: true,
            backgroundColor: [
                'rgba(255, 169, 40, .2)'
            ],
        }
    ]
}
const chartOptions1 = {
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    hover: {
        mode: 'index'
    },
    scales: {
        xAxes: [{
            display: false,
        }],
        yAxes: [{
            display: false,
        }]
    }
}


const chartOptions2 = {
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    hover: {
        mode: 'index'
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: 'transparent',
            },
            ticks: {
                fontColor: '#BFC2C6'
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                color: 'rgba(191, 194, 198, .45)',
                borderDash: [5, 10],
            },
            ticks: {
                fontColor: '#BFC2C6',
                min: 0,
                stepSize: 5,
            }
        }]
    }
}

const getChart = () => {
    const borderColor = getComputedStyle(document.body).getPropertyValue('--primary-color') || '#2c84d8';
    const backgroundColor = getComputedStyle(document.body).getPropertyValue('--primary-lighter-color') || '#2c84d8';
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                data: [12, 19, 3, 5, 2, 3, 9],
                borderColor: [borderColor],
                borderWidth: 4,
                fill: true,
                backgroundColor: [backgroundColor],
            }
        ]
    }
}

const chart2 = getChart()


export const Dashboard = () => {

    return (
        <div className="layout-dashboard">
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="notification">
                        <h6>👋  Hello! Welcome to Hit! Before start please complete your profile to know you better. <button className="p-link">Profile settings <i className="pi pi-arrow-up"></i></button></h6>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="p-grid" style={{ margin: '-1rem' }}>
                        <div className="p-col">
                            <div className="card overview-box white">
                                <div className="overview-info">
                                    <h6>Graphics</h6>
                                    <h1>148%</h1>
                                </div>
                                <i className="pi pi-image"></i>
                            </div>
                        </div>
                        <div className="p-col">
                            <div className="card overview-box blue">
                                <div className="overview-info">
                                    <h6>New users (Today)</h6>
                                    <h1>32</h1>
                                </div>
                                <i className="pi pi-users"></i>
                            </div>
                        </div>
                        <div className="p-col">
                            <div className="card overview-box gray">
                                <div className="overview-info">
                                    <h6>Uptime</h6>
                                    <h1>5h12m</h1>
                                </div>
                                <i className="pi pi-globe"></i>
                            </div>
                        </div>
                        <div className="p-col">
                            <div className="card overview-box darkgray">
                                <div className="overview-info">
                                    <h6>Text coverage</h6>
                                    <h1>96%</h1>
                                </div>
                                <i className="pi pi-th-large"></i>
                            </div>
                        </div>
                        <div className="p-col">
                            <div className="card overview-box orange">
                                <div className="overview-info">
                                    <h6>Cloud users</h6>
                                    <h1>4216</h1>
                                </div>
                                <i className="pi pi-cloud"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-col-12 p-md-6 p-xl-3">
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


                <div className="p-col-12 p-md-6">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="card device-status">
                                <div className="p-grid">
                                    <div className="p-col-12 p-xl-9">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h6>Total connected device change for last 4 days</h6>
                                                <p className="subtitle">Line graph</p>
                                            </div>
                                        </div>
                                        <p className="content">Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi..</p>
                                        <div className="progress active">
                                            <span>Today</span>
                                            <ProgressBar className="progressBar" value={100} showValue={false}></ProgressBar>
                                            <span>2100</span>
                                        </div>
                                        <div className="progress">
                                            <span>Fri</span>
                                            <ProgressBar className="progressBar" value={20} showValue={false}></ProgressBar>
                                            <span>1100</span>
                                        </div>
                                        <div className="progress">
                                            <span>Thu</span>
                                            <ProgressBar className="progressBar" value={50} showValue={false}></ProgressBar>
                                            <span>1203</span>
                                        </div>
                                        <div className="progress">
                                            <span>Wed</span>
                                            <ProgressBar className="progressBar" value={100} showValue={false}></ProgressBar>
                                            <span>1316</span>
                                        </div>
                                        <button className="p-link">More</button>
                                    </div>
                                    <div className="p-col-12 p-xl-3">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h6>Devices</h6>
                                                <p className="subtitle">Type</p>
                                            </div>
                                        </div>
                                        <div className="p-grid p-nogutter">
                                            <div className="p-col-3 p-xl-12">
                                                <div className="device">
                                                    <span><span>1</span> iPhone</span>
                                                    <span className="status">22%</span>
                                                </div>
                                            </div>
                                            <div className="p-col-3 p-xl-12">
                                                <div className="device">
                                                    <span><span>2</span> Galaxy S20</span>
                                                    <span className="status">18%</span>
                                                </div>
                                            </div>
                                            <div className="p-col-3 p-xl-12">
                                                <div className="device">
                                                    <span><span>3</span> Macbook</span>
                                                    <span className="status">13%</span>
                                                </div>
                                            </div>
                                            <div className="p-col-3 p-xl-12">
                                                <div className="device">
                                                    <span><span>4</span> Macbook Air</span>
                                                    <span className="status">11%</span>
                                                </div>
                                            </div>
                                            <button className="p-link">See all</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12  desktop-teams">
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
                                    <div className="no-picture" style={{ background: '#BAE6FF' }}><span>AT</span></div>
                                    <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                                    <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                                    <div className="no-picture "><span>+18</span></div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="p-col-12 p-md-8 p-xl-3">
                    <div className="card operations">
                        <div className="card-header">
                            <div className="card-title">
                                <h6>Cloud operations</h6>
                                <p className="subtitle">Europe 1</p>
                            </div>
                            <p className="subtitle">8 May</p>
                        </div>
                        <Chart type="line" data={chart1} options={chartOptions1} style={{ maxHeight: ' 160px' }}></Chart>
                        <div className="insights">
                            <div className="insight-header">
                                <img src="assets/demo/images/dashboard/subtract.svg" alt="freya-layout" />
                                <h6>Insights</h6>
                            </div>
                            <ul>
                                <li>
                                    <span><span>1</span> Increase CPU load levels</span>
                                    <span className="p-tag p-tag-warning">12%</span>
                                </li>
                                <li>
                                    <span><span>2</span> 28% increase on thanks mes./w..</span>
                                    <span className="p-tag p-tag-success">UP!</span>
                                </li>
                                <button className="p-link">See all(4)</button>
                            </ul>

                        </div>
                        <Button type="button" label="Go to full stock page" className="p-button-outlined"></Button>
                    </div>
                </div >

                <div className="p-col-12 p-md-4 p-xl-3 mobile-teams">
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
                            <div className="no-picture" style={{ background: '#FFC3A2' }}><span>TA</span></div>
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-1.png" alt="freya-layout" />
                            <div className="no-picture" style={{ background: '#FFDB7D' }}><span>JH</span></div>
                            <img src="assets/demo/images/dashboard/avatar/avatar-2.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-3.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-4.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-5.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-6.png" alt="freya-layout" />
                            <div className="no-picture" style={{ background: '#BAE6FF' }}><span>SE</span></div>
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-1.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-2.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-3.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-4.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-5.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-6.png" alt="freya-layout" />
                            <div className="no-picture" style={{ background: '#91CC9D' }}><span>TH</span></div>
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <img src="assets/demo/images/dashboard/avatar/avatar-7.png" alt="freya-layout" />
                            <div className="no-picture"><span>+18</span></div>
                        </div>
                        <button className="p-link">See all teams</button>
                    </div>
                </div>

                <div className="p-col-12 p-md-12 p-xl-8">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="card chart">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h6>Nasdaq 100</h6>
                                        <p className="subtitle">Line graph</p>
                                    </div>
                                </div>
                                <Chart type="line" data={chart2} options={chartOptions2} style={{ maxHeight: '330px' }}></Chart>
                            </div>
                        </div>
                        <div className="p-col-12  p-md-5">
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
                        <div className="p-col-12 p-md-7">
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
                                    <li>
                                        <div className="schedule-header">
                                            <h6>New Project Kick, v2</h6>
                                            <span>12:00 - 14:00</span>
                                        </div>
                                        <button className="p-link">Master room</button>
                                        <span>5 participiants (1 accepted)</span>
                                    </li>
                                </ul>
                                <button className="p-link">Go to full schedule</button>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="p-col-12 p-xl-4">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-xl-12">
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
                        <div className="p-col-12 p-md-6 p-xl-12">
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
                    </div>

                </div>
            </div >
        </div >
    )

}
