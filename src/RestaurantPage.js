import React, { Component } from 'react';
import './RestaurantPage.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AutoComplete from 'material-ui/AutoComplete';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Done from 'material-ui/svg-icons/action/done';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Facebook from 'material-ui-community-icons/icons/facebook';
import Instagram from 'material-ui-community-icons/icons/instagram';
import Twitter from 'material-ui-community-icons/icons/twitter';

class Login extends Component {
	static muiName = 'RaisedButton';
	constructor(props) {
		super(props);
		this.state = {
			handleChange: props.handleChange
		};
	}

	render() {
		return (
			<div>
				<FlatButton
					label="Login"
					style={style}
					onClick={eventLogIn => {
						this.state.handleChange(eventLogIn, true);
					}}
				/>
				<RaisedButton label="Create An Account" primary={true} style={style} />
			</div>
		);
	}
}

const style = {
	margin: 10
};

const Logged = props => (
	<IconMenu
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}
		iconButtonElement={
			<FlatButton
				label="Welcome Kevin"
				style={{height:'48px'}}
				icon={
					<Avatar src="/Images/restaurantlogo/mcdo.gif" /> 
					}
					
			/>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
	>
		<MenuItem primaryText="Profile" />
		<MenuItem primaryText="Reminders" />
		<MenuItem primaryText="Reviews" />
		<MenuItem
			primaryText="Sign out"
			onClick={eventSignOut => {
				props.handleChange(eventSignOut, false);
			}}
		/>
	</IconMenu>
);

Logged.muiName = 'IconMenu';

class AutoCompleteClass extends Component {
	state = {
		dataSource: []
	};

	handleUpdateInput = value => {
		this.setState({
			dataSource: [value]
		});
	};

	render() {
		return (
			<div>
				<AutoComplete
				hintText="Search for your shit here"
				dataSource={this.state.dataSource}
				onUpdateInput={this.handleUpdateInput}
				style={{width:"400px", textAlign:"middle"}}
				textFieldStyle={{width:"100%"}}	
				/>
			</div>
		);
	}
}

const customContentStyleLocation = {
	width: '250px'
};

class LocationDialog extends React.Component {
	state = {
		open: false
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const actions = [
			
			<FlatButton label="Get Directions" primary={true} href={'http://www.google.com'} target={'_blank'} />
		];

		return (
			<div>
				<FlatButton
					style={{ marginTop: '10px' }}
					primary={true}
					label={'Get Directions'}
					onClick={this.handleOpen}
				/>

				<Dialog
					contentStyle={customContentStyleLocation}
					title="Location"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<span>jjjjjjjjjjjjjjjhkmkmkm</span>
				</Dialog>
			</div>
		);
	}
}

class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: true
		};
	}
	handleChange = (event, logged) => {
		this.setState({ logged: logged });
	};
	render() {
		const AppBarProps = {
			title: <AutoCompleteClass />,
			iconElementRight: this.state.logged ? (
				<Logged handleChange={this.handleChange} />
			) : (
				<Login handleChange={this.handleChange} />
			),
			showMenuIconButton: false
		};
		return (
			<MuiThemeProvider>
				<div>
					<div className="App">
						<AppBar {...AppBarProps} />

						<Grid fluid style={{ paddingRight: '0px', paddingLeft: '0px' }}>
							<Row style={{ background: 'white' }}>
								<Col md={6}>
									<Row>
										<Link to="/">
											<FlatButton
												label="Home"
												primary={true}
												labelPosition="before"
												icon={<ActionTrendingFlat />}
											/>
										</Link>
										<Link to="/">
											<FlatButton
												label="Beirut"
												primary={true}
												labelPosition="before"
												icon={<ActionTrendingFlat />}
											/>
										</Link>
										<Link to="/">
											<FlatButton
												label="Tabbouleh"
												primary={true}
												labelPosition="before"
												icon={<ActionTrendingFlat />}
											/>
										</Link>
										<Link to="/">
											<FlatButton label="Restaurant Name" primary={true} labelPosition="before" />
										</Link>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<Row center="md">
										<Col md={8} style={{ paddingRight: '0px', paddingLeft: '0px' }}>
											<Tabs initialSelectedIndex={2}>
												<Tab label="Monday 13">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Tuesday 14">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Wednesday 15">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Thursday 16">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Friday 17">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Saturday 18">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Sunday 19">
													<img
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
											</Tabs>
										</Col>
									</Row>
									<Row center="md">
										<Col
											style={{
												paddingRight: '0px',
												paddingLeft: '0px',
												background: 'white',
												height: '150px'
											}}
											md={8}
										>
											<Row style={{ padding: '0px' }}>
												<Col style={{ height: '150px' }} md={6}>
													<Avatar src="/Images/restaurantlogo/mcdo.gif" size={80} />

												</Col>
												<Col style={{ height: '150px' }} md={6}>
													<FloatingActionButton>
														<ContentAdd />
													</FloatingActionButton>
												</Col>
											</Row>
										</Col>
									</Row>
									<Row center="md">
										<Col style={{ paddingRight: '0px', paddingLeft: '0px' }} md={8}>
											<Tabs initialSelectedIndex={0}>
												<Tab label="Overview">
													<Card>
														<Row>
															<Col md={4} style={{ width: '50%' }}>
																<CardHeader
																	title="Phone Number"
																	subtitle={
																		<span
																			style={{
																				paddingTop: '8px',
																				display: 'block'
																			}}
																		>
																			01 222 333 - 01 666 666
																		</span>
																	}
																/>
																<CardHeader
																	title="Location"
																	subtitle={<LocationDialog label="Get Directions" />}
																/>
																<CardActions>
																	<CardHeader
																		title="Additional Information"
																		style={{ padding: '8px' }}
																		subtitle={
																			<span
																				style={{
																					paddingTop: '4px',
																					display: 'block',
																					lineHeight: '10px'
																				}}
																			>
																				<div>
																					<Done style={{ position: 'relative', top: '6px' }} />{' '}
																					Delivery
																				</div>
																				<br />
																				<div>
																					<Done style={{ position: 'relative', top: '6px' }} />{' '}
																					Dine In
																				</div>
																				<br />
																				<div>
																					<Done style={{ position: 'relative', top: '6px' }} />{' '}
																					Take Away
																				</div>
																			</span>
																		}
																	/>
																</CardActions>
																<CardHeader
																	title="Social Media Links"
																	style={{paddingRight:0}}
																	//subtitleStyle={{padding:0}}
																	textStyle={{paddingRight:0}}
																	subtitle={	
																		<div style={{marginTop: "10px",padding:0}}>
																			<FlatButton
																				href="https://github.com/callemall/material-ui"
																				target="_blank"
																				primary={true}
																				icon={<Facebook />}
																			/>
																			<FlatButton
																				href="https://github.com/callemall/material-ui"
																				target="_blank"
																				primary={true}
																				icon={<Instagram />}
																			/>
																			<FlatButton
																				href="https://github.com/callemall/material-ui"
																				target="_blank"
																				primary={true}
																				icon={<Twitter />}
																			/>
																		</div>
																		}
																/>
															</Col>
															<Col md={8} style={{ textAlign: 'center' }}>
																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Openning Hours"
																	/>
																</List>
																<Divider />
																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Mon 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Tue 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Wed 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Thu 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Fri 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Sat 11AM to 9PM"
																	/>
																</List>

																<List>
																	<ListItem
																		innerDivStyle={{ padding: '8px' }}
																		primaryText="Sun 11AM to 9PM"
																	/>
																</List>
															</Col>
														</Row>
													</Card>
												</Tab>
												<Tab label="Menu">
													<img
														style={{ width: '100%', height: '550px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Reviews">
													<Card>
														<CardHeader title="Without Avatar" subtitle="Subtitle" />
														<CardActions>
															<FlatButton label="Action1" />
														</CardActions>
													</Card>
												</Tab>
												<Tab label="Photos">
													<span>test photos</span>
												</Tab>
											</Tabs>
										</Col>
									</Row>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default RestaurantPage;
