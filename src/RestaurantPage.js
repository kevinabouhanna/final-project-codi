import React, { Component } from 'react';
import './RestaurantPage.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AutoComplete from 'material-ui/AutoComplete';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Done from 'material-ui/svg-icons/action/done';
import Create from 'material-ui/svg-icons/content/create';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Facebook from 'material-ui-community-icons/icons/facebook';
import Instagram from 'material-ui-community-icons/icons/instagram';
import Twitter from 'material-ui-community-icons/icons/twitter';
import Snackbar from 'material-ui/Snackbar';
import { GridList, GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';

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
				style={{ height: '48px' }}
				icon={<Avatar src="/Images/restaurantlogo/sohiwshahi.png" />}
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
					hintText="Search for your meal here"
					dataSource={this.state.dataSource}
					onUpdateInput={this.handleUpdateInput}
					style={{ width: '400px', textAlign: 'middle' }}
					textFieldStyle={{ width: '100%' }}
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
			<FlatButton
				label="Get Directions"
				primary={true}
				href={
					'https://www.google.com.lb/maps/dir//Unnamed+Road/@33.8926966,35.5427732,162m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x151f1640bb56e463:0xdf8b964731ff9938!2m2!1d35.5429796!2d33.8931329?hl=en'
				}
				target={'_blank'}
			/>
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
					<span>Sader Street Burj Hamud, Mont-Liban, Lebanon</span>
				</Dialog>
			</div>
		);
	}
}

const gridStyles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 911,
		overflowY: 'auto'
	}
};

const tilesData = [
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Breakfast',
		author: 'jill111'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Tasty burger',
		author: 'pashminu'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Camera',
		author: 'Danson67'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Morning',
		author: 'fancycrave1'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Hats',
		author: 'Hans'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Honey',
		author: 'fancycravel'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Vegetables',
		author: 'jill111'
	},
	{
		img: 'http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d',
		alt: 'blah',
		title: 'Water plant',
		author: 'BkrmadtyaKarki'
	}
];

class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: true,
			snackbarAutoHideDuration: 5000,
			snackbarMessage: 'You will recieve an Email of this meal next week',
			remindMeBoxIsOpen: false
		};
	}

	handleRemindMeClick = () => {
		this.setState({ remindMeBoxIsOpen: true });
	};
	handleChange = (event, logged) => {
		this.setState({ logged: logged });
	};
	render() {
		const AppBarProps = {
			iconElementLeft: (
				<IconButton>
					<img src="/Images/logo.png" alt="resto" height="32" />
				</IconButton>
			),
			title: <AutoCompleteClass />,
			iconElementRight: this.state.logged ? (
				<Logged handleChange={this.handleChange} />
			) : (
				<Login handleChange={this.handleChange} />
			)
			//showMenuIconButton: false
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
										<Link to="/batata.harra/">
											<FlatButton
												label="Batata Harra"
												primary={true}
												labelPosition="before"
												icon={<ActionTrendingFlat />}
											/>
										</Link>
										<Link to="/batata.harra/sohi.w.shahi">
											<FlatButton label="Sohi w Shahi" primary={true} labelPosition="before" />
										</Link>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<Row center="md">
										<Col md={8} style={{ paddingTop: '5px', paddingRight: '0px', paddingLeft: '0px', textAlign: "center",background: "white", }}>
											<Tabs initialSelectedIndex={2}>
												<Tab label="Monday 13">
													<img
														alt=""
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Tuesday 14">
													<img
														alt=""
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Wednesday 15">
													<div style={{textAlign:'center',width:'100%',background:'white'}}>
													<img
														alt=""
														style={{ width: 'auto', height: '350px', margin:"0 auto",display: "inline-block", }}
														src="/Images/dailymenu.jpg"
													/>
													</div>
												</Tab>
												<Tab label="Thursday 16">
													<img
														alt=""
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Friday 17">
													<img
														alt=""
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Saturday 18">
													<img
														alt=""
														style={{ width: '100%', height: '350px' }}
														src="http://muchasgraciasrestaurant.com/wp-content/uploads/2017/03/Daily-Special-450px.png?dee76d"
													/>
												</Tab>
												<Tab label="Sunday 19">
													<img
														alt=""
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
												height: '120px'
											}}
											md={8}
										>
											<Row style={{ padding: '0px' }}>
												<Col style={{ height: '150px', textAlign: 'left' }} md={6}>
													<CardHeader
														title="Sohi w Shahi"
														subtitle="Burj Hammoud Branch"
														avatar={
															<Avatar
																src="/Images/restaurantlogo/sohiwshahi.png"
																size={80}
															/>
														}
													/>
												</Col>
												<Col style={{ height: '150px' }} md={6}>
													<RaisedButton
														label="Add a review"
														labelPosition="before"
														primary={false}
														icon={<Create />}
														style={{ margin: 12 }}
														onClick={()=> {
														const element = document.getElementById('text-field-focus').focus()
														}}
													/>
													<RaisedButton
														label="Remind me next week"
														labelPosition="before"
														primary={true}
														icon={<ContentAdd />}
														style={{ margin: 12 }}
														onClick={event => this.handleRemindMeClick()}
													/>
													<Snackbar
														open={this.state.remindMeBoxIsOpen}
														message={this.state.snackbarMessage}
														autoHideDuration={this.state.snackbarAutoHideDuration}
													/>
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
																			71 901 977 - 01 256 880
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
																	style={{ paddingRight: 0 }}
																	//subtitleStyle={{padding:0}}
																	textStyle={{ paddingRight: 0 }}
																	subtitle={
																		<div style={{ marginTop: '10px', padding: 0 }}>
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
																		primaryText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opening Hours"
																	/>
																</List>
																<Divider />
																<Row end="xs">
																	<Col md={8} style={{ textAlign: 'left' }}>
																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Monday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11AM to 9PM"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Tuesday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11AM to 9PM"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Wednesday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11AM to 9PM"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Thursday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11AM to 9PM"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Friday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11AM to 9PM"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Saturday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed"
																			/>
																		</List>

																		<List>
																			<ListItem
																				innerDivStyle={{ padding: '8px' }}
																				primaryText="Sunday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed"
																			/>
																		</List>
																	</Col>
																</Row>
															</Col>
														</Row>
													</Card>
													<br />
													<Card style={{ height: '180px' }}>
														<CardHeader
															title="Add your Review"
															subtitle="Kevin Abou Hanna"
															avatar="/Images/restaurantlogo/sohiwshahi.png"
														/>
														<TextField id={'text-field-focus'} hintText="Type your review here" style={{width: "90%", paddingLeft: "20px"}} />
													</Card>
														<br />				
												</Tab>
												<Tab label="Menu">
													<img
														alt=""
														style={{ width: '100%', height: '550px' }}
														src="/Images/1.jpg"
													/>
													<img
														alt=""
														style={{ width: '100%', height: '550px' }}
														src="/Images/2.jpg"
													/>
													<img
														alt=""
														style={{ width: '100%', height: '550px' }}
														src="/Images/3.jpg"
													/>
													<img
														alt=""
														style={{ width: '100%', height: '550px' }}
														src="/Images/4.jpg"
													/>
													<img
														alt=""
														style={{ width: '100%', height: '550px' }}
														src="/Images/5.jpg"
													/>
												</Tab>
												<Tab label="Reviews">
													<Card style={{ height: '180px' }}>
														<CardHeader
															title="Add your Review"
															subtitle="Kevin Abou Hanna"
															avatar="/Images/restaurantlogo/sohiwshahi.png"
														/>
														<TextField hintText="Type your review here" style={{width: "90%", paddingLeft: "20px"}} />
													</Card>
												</Tab>
												<Tab label="Photos">
													<div style={gridStyles.root}>
														<GridList cellHeight={180} style={gridStyles.gridList}>
															{tilesData.map((tile, index) => (
																<GridTile
																	key={index}
																	title={tile.title}
																	subtitle={
																		<span>
																			by <b>{tile.author}</b>
																		</span>
																	}
																>
																	<img alt="" src={tile.img} />
																</GridTile>
															))}
														</GridList>
													</div>
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
