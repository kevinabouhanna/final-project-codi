import React, { Component } from 'react';
import './ResultPage.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Tabs, Tab } from 'material-ui/Tabs';
import SearchBar from 'material-ui-search-bar';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';

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
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<AppBar
						iconElementRight={
							this.state.logged ? (
								<Logged handleChange={this.handleChange} />
							) : (
								<Login handleChange={this.handleChange} />
							)
						}
						showMenuIconButton={false}
					/>
					<div>
						<Link to="/">
							<FlatButton
      label="Home"
	  primary={true}
      labelPosition="before"
	  icon={<ActionTrendingFlat/>}
	  />
						</Link>
						<Link to="/">Batata</Link>
						<Link to="/">Batata3</Link>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default ResultPage;
