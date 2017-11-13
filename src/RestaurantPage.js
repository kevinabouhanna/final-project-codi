import React, { Component } from 'react';
import './RestaurantPage.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AutoComplete from 'material-ui/AutoComplete';
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
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
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
					hintText="Type anything"
					dataSource={this.state.dataSource}
					onUpdateInput={this.handleUpdateInput}
				/>
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
			title:<AutoCompleteClass/>,
			iconElementRight:this.state.logged ? (
				<Logged handleChange={this.handleChange} />
			) : (
				<Login handleChange={this.handleChange} />
			),
			showMenuIconButton: false
		}
		return (
			<MuiThemeProvider>
				<div>
					<div className="App">
						<AppBar {...AppBarProps}/>

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
										<Col md={8}>
											<Tabs>
												<Tab label="Monday 13">
													<p>ssssss</p>
												</Tab>
												<Tab label="Tuesday 14">
													<p>ssssss</p>
												</Tab>
												<Tab label="Wednesday 15">
													<p>ssssss</p>
												</Tab>
												<Tab label="Thursday 16">
													<p>ssssss</p>
												</Tab>
												<Tab label="Friday 17">
													<p>ssssss</p>
												</Tab>
												<Tab label="Saturday 18">
													<p>ssssss</p>
												</Tab>
												<Tab label="Sunday 19">
													<p>ssssss</p>
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
