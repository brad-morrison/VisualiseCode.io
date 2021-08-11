import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AppRightPanel = (props) => {

	return (
		<div className="layout-rightpanel" onClick={props.onRightPanelClick}>
			<div className="rightpanel-wrapper" >
				<div className="rightpanel-section weather-section">
					<div className="section-header">
						<h6>Today</h6>
					</div>
					<div className="weather">
						<img src="assets/demo/images/rightpanel/icon-sun.svg" alt="freya-layout" />
						<div className="weather-info">
							<h6>Ankara, 22 May</h6>
							<h1>24º</h1>
						</div>
					</div>
				</div>

				<div className="rightpanel-section tasks-section">
					<div className="section-header">
						<h6>My list</h6>
						<Button type="button" icon="pi pi-plus" className="p-button-secondary p-button-text p-button-rounded"></Button>
					</div>
					<ul>
						<li>
							<div className="task-info">
								<h6>Perform usability testing for P15 MVP</h6>
								<span>-Public pages</span>
								<span>-Product pages</span>
							</div>
						</li>
						<li>
							<div className="task-info">
								<h6>Buy puzzle set from Amazon</h6>
								<span>Ravensburger Seurat, 2000</span>
							</div>
						</li>
						<li className="done">
							<div className="task-info">
								<h6>Morning Run</h6>
							</div>
							<i className="pi pi-check"></i>
						</li>
						<li className="done">
							<div className="task-info">
								<h6>Morning Run</h6>
							</div>
							<i className="pi pi-check"></i>
						</li>
					</ul>
				</div>

				<div className="rightpanel-section favorites-section">
					<div className="section-header">
						<h6>Favorites</h6>
					</div>
					<div className="favorite-items">
						<button className="p-link favorite-item">
							<img src="assets/demo/images/rightpanel/github.svg" alt="freya-layout" />
						</button>
						<button className="p-link favorite-item">
							<img src="assets/demo/images/rightpanel/slack.svg" alt="freya-layout" />
						</button>
						<button className="p-link favorite-item">
							<img src="assets/demo/images/rightpanel/aws.svg" alt="freya-layout" />
						</button>
						<button className="p-link favorite-item">
							<img src="assets/demo/images/rightpanel/jenkins.svg" alt="freya-layout" />
						</button>
						<button className="p-link favorite-item">
							<img src="assets/demo/images/rightpanel/jira.svg" alt="freya-layout" />
						</button>
						<button className="p-link add-item">
							<i className="pi pi-plus"></i>
						</button>
					</div>
				</div>

				<div className="rightpanel-section chat-section chat">
					<TabView>
						<TabPanel header={<>
							<img src="assets/demo/images/rightpanel/profile-1.png" alt="freya-layout" />
							<span className="p-badge">3</span>
						</>}>

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

						<TabPanel header={<>
							<img src="assets/demo/images/rightpanel/profile-2.png" alt="freya-layout" />
							<span className="p-badge">1</span>
						</>}>
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
									<InputText type="text" placeholder="Write here..." />
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
		</div>
	)
}

export default AppRightPanel;