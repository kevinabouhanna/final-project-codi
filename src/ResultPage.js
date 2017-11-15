import React, { Component } from 'react';
import './ResultPage.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IconButton } from 'material-ui';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Checkbox from 'material-ui/Checkbox';
import AutoComplete from 'material-ui/AutoComplete';
import Call from 'material-ui/svg-icons/communication/call';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import {restaurants} from './restaurants'
//Route
import { Link } from 'react-router-dom';

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
					<Avatar src="/Images/restaurantlogo/sohiwshahi.png" /> 
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
const styles = {
	block: {
		maxWidth: 250
	},
	checkbox: {
		marginTop: 25,
		marginBottom: 16,
		marginLeft: 200
	}
};

/*
class RightButtons extends React.Component {
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
		return (

			this.state.logged ? (
			<Logged handleChange={this.handleChange} />
			) : (
			<Login handleChange={this.handleChange} />
			)
						
			showMenuIconButton={false}	
		)
	}
};	
*/

/*
const rightButtons = (
    <div>
      <FlatButton label="About" style={buttonStyle} />
      <FlatButton label="Home" style={buttonStyle} />
    </div>
  );

  
	const buttonStyle = {
	  backgroundColor: 'transparent',
	  color: 'white'
	};
*/

const iconButtonResultPage = {
	width: 130,
	height: 125
};

const iconResultPage = {
	width: 90,
	height: 90,
	padding: 5
};

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
		const {locationText} = this.props
		const actions = [
			<FlatButton label="Get Directions" primary={true} href={'http://www.google.com'} target={'_blank'} />
		];

		return (
			<div>
				<IconButton onClick={this.handleOpen} style={iconButtonResultPage} iconStyle={iconResultPage}>
					<LocationOn color= "white" style={iconResultPage} />
				</IconButton>
				<Dialog
					title="Location"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					contentStyle={customContentStyleLocation}
				>
					<span>{locationText}</span>
				</Dialog>
			</div>
		);
	}
}

const customContentStyleCall = {
	width: '250px'
};

class CallDialog extends React.Component {
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
		const { callLink1, callText1, callLink2, callText2 } = this.props
		return (
			<div>
				<IconButton onClick={this.handleOpen} style={iconButtonResultPage} iconStyle={iconResultPage}>
					<Call color= "white"/>
				</IconButton>
				<Dialog
					title="Phone Numbers"
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					contentStyle={customContentStyleCall}
				>
					<a href={"tel: "+callLink1}>{callText1}</a>
					<br />
					<br />
					<a href={"tel: "+callLink2}>{callText2}</a>
				</Dialog>
			</div>
		);
	}
}

const Restaurant = ({ img, restaurantName, callLink1, callText1, callLink2, callText2, locationText, restaurantLocation, openHours, costOfMeal, delivery, link }) => (
	<Row>
		<Col md={12}>
			<Row center="md">
				<Col className="cardResult" md={5}>
					<Row style={{ height: '50%' }}>
						<Col md={9}>
							<List>
								<Link style={{ textDecoration: "none"}} to={link || '/batata.harra/sohi.w.shahi'}>
									<ListItem
										style={{ height: '107px' }}
										leftAvatar={<Avatar src={img} size={80} />}
										primaryText={restaurantName}
										secondaryText={restaurantLocation}
									/>
								</Link>
							</List>
						</Col>
						<Col md={3} style={{ background: '#00BDD5' }}>
							<CallDialog callLink1={callLink1} callText1={callText1} callLink2={callLink2} callText2={callText2} />
						</Col>
					</Row>
					<Divider />
					<Row style={{ height: '50%' }}>
						<Col md={9}>
							<List style={{ textAlign: 'left' }}>
								<ListItem style={{ fontSize: '15px', height: '35px' }} primaryText={openHours} />

								<ListItem style={{ fontSize: '15px', height: '35px' }} primaryText={costOfMeal} />

								<ListItem style={{ fontSize: '15px', height: '35px' }} primaryText={delivery} />
							</List>
						</Col>
						<Col md={3} style={{ background: '#00BDD5' }}>
							<LocationDialog locationText={locationText}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
);

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
					style={{width:"400px"}}
					textFieldStyle={{width:"100%"}}					
				/>
			</div>
		);
	}
}

class ResultPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: true
		};
	}
	handleChange = (event, logged) => {
		this.setState({ logged: logged });
	};
	// iconElementLeft: (
	// 	
	// ),
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
						<div>
							<Grid fluid style={{ paddingRight: '0px', paddingLeft: '0px' }}>
								<Row style={{ background: 'white' }}>
									<Col md={4}>
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
												<FlatButton label="Batata Harra" primary={true} labelPosition="before" />
											</Link>
										</Row>
										<Row style={{ marginTop: '10px', marginBottom: '15px' }}>
											<Col md={9}>
												<span>Search Results for Batata Harra in Beirut</span>
											</Col>
										</Row>
									</Col>

									<Col md={2}>
										<Checkbox
											checked={true}
											label="Open Now"
											labelPosition="left"
											style={styles.checkbox}
										/>
									</Col>
									<Col md={2}>
										<Checkbox
											checked={true}
											label="Delivery"
											labelPosition="left"
											style={styles.checkbox}
										/>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<Tabs initialSelectedIndex={2}>
											{ 
												Object.keys(restaurants).map(
													( name, index ) =>
													<Tab label={name} key={index}>
													{ 
														restaurants[name].map(
															(restaurant,index) => 
															<Restaurant {...restaurant} key={index}/>
														)
													}
													</Tab>
												)

											}
										</Tabs>
									</Col>
								</Row>
							</Grid>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default ResultPage;
